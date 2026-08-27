-- Server-side ASK metering.
--
-- The free-tier cap in @cairn/monetization is enforced client-side, which is
-- adequate against honest use and useless against a modified client spending
-- the operator's Anthropic quota. This is the authoritative counter; the ask
-- Edge Function consumes from it before calling the model.
--
-- Deliberately stores no question text and no child reference — only that an
-- account asked something in a given month. Metering must not quietly become
-- a log of what families are struggling with (invariant 5's spirit, applied
-- to a table that is not itself ciphertext).

create table "ask_usage" (
  "authUserId" text        not null,
  "period"     text        not null,          -- 'YYYY-MM', UTC
  "count"      integer     not null default 0,
  "updatedAt"  timestamptz not null default now(),
  primary key ("authUserId", "period")
);

alter table "ask_usage" enable row level security;

-- Readable by its owner so the app can show remaining queries; writable by
-- nobody. Writes happen only through consume_ask_quota, which runs as definer.
create policy ask_usage_read_own on "ask_usage"
  for select using (auth.uid()::text = "authUserId");

-- Entitlement, as the server understands it.
--
-- Populated by the RevenueCat webhook, which is Phase 7 work and NOT YET
-- WIRED. Until it is, every account defaults to 'free' and the server cap
-- applies to everyone — including a genuine subscriber. That is the safe
-- direction to be wrong in (a paying user hits a cap and complains; the
-- alternative is an unbilled account draining the model budget), but it is a
-- real gap and it is recorded here rather than discovered later.
create table "account_entitlement" (
  "authUserId" text        primary key,
  "tier"       text        not null default 'free',  -- 'free' | 'premium'
  "expiresOn"  date,
  "updatedAt"  timestamptz not null default now()
);

alter table "account_entitlement" enable row level security;

create policy entitlement_read_own on "account_entitlement"
  for select using (auth.uid()::text = "authUserId");

/*
 * Atomically consume one ASK query.
 *
 * The count always increments, including on a denied request — that keeps the
 * check-and-increment a single statement, so two concurrent requests cannot
 * both pass a limit of one, and it leaves abuse visible in the counter rather
 * than clamping it out of sight.
 *
 * security definer so it can write a table the caller cannot; search_path is
 * pinned because a definer function without it is a privilege-escalation
 * hazard.
 */
create or replace function consume_ask_quota(monthly_limit integer)
returns table (allowed boolean, used integer, remaining integer)
language plpgsql
security definer
set search_path = public
as $$
#variable_conflict use_column
declare
  uid        text := auth.uid()::text;
  cur_period text := to_char(now() at time zone 'utc', 'YYYY-MM');
  cur_tier   text;
  new_count  integer;
begin
  if uid is null then
    raise exception 'not authenticated';
  end if;

  select e.tier into cur_tier from account_entitlement e where e."authUserId" = uid;

  insert into ask_usage ("authUserId", period, count, "updatedAt")
    values (uid, cur_period, 1, now())
  on conflict ("authUserId", period)
    do update set count = ask_usage.count + 1, "updatedAt" = now()
  returning ask_usage.count into new_count;

  -- Premium is uncapped; the counter still runs, for support and abuse review.
  if cur_tier = 'premium' then
    return query select true, new_count, -1;
    return;
  end if;

  return query select
    new_count <= monthly_limit,
    new_count,
    greatest(0, monthly_limit - new_count);
end;
$$;

revoke all on function consume_ask_quota(integer) from public;
grant execute on function consume_ask_quota(integer) to authenticated;
