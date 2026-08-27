-- Row-level security: the server boundary complementing invariant 5.
-- Deny-by-default everywhere; adults reach rows only via their own auth id
-- and live relationship edges (until IS NULL or in the future). The child
-- table holds only ciphertext + an opaque stage index, but its existence and
-- routing metadata are sensitive, so it gets the same treatment.

alter table "person"            enable row level security;
alter table "account"           enable row level security;
alter table "child"             enable row level security;
alter table "relationship_edge" enable row level security;
alter table "pregnancy"         enable row level security;
alter table "wrapped_key"       enable row level security;
alter table "substrate_unit"    enable row level security;

-- Substrate is the same for everyone (section 33a: not encrypted) — readable
-- by any signed-in user, writable by nobody but the service role.
create policy substrate_read on "substrate_unit"
  for select using (auth.role() = 'authenticated');

-- An adult manages their own account row.
create policy account_self on "account"
  for all using (auth.uid()::text = "authUserId")
  with check (auth.uid()::text = "authUserId");

-- Helper predicate inlined below: an edge is live when until is null or future.

-- A person row is visible to the adult it is, or to an adult holding a live
-- edge to it.
create policy person_reachable on "person"
  for select using (
    exists (select 1 from "account" a
            where a."personId" = "person".id
              and a."authUserId" = auth.uid()::text)
    or exists (select 1 from "relationship_edge" e
               join "account" a on a."personId" = e."adultId"
               where e."childId" = "person".id
                 and a."authUserId" = auth.uid()::text
                 and (e."until" is null or e."until" > now()))
  );

-- Ciphertext rows: reachable only through a live edge; writes additionally
-- require 'full' or 'contribute' scope.
create policy child_read_via_edge on "child"
  for select using (
    exists (select 1 from "relationship_edge" e
            join "account" a on a."personId" = e."adultId"
            where e."childId" = "child"."personId"
              and a."authUserId" = auth.uid()::text
              and (e."until" is null or e."until" > now()))
  );

create policy child_write_via_edge on "child"
  for all using (
    exists (select 1 from "relationship_edge" e
            join "account" a on a."personId" = e."adultId"
            where e."childId" = "child"."personId"
              and a."authUserId" = auth.uid()::text
              and (e."until" is null or e."until" > now())
              and e."scope" in ('full', 'contribute'))
  );

-- An adult sees edges they are party to; only a 'full'-scope adult may grant
-- new edges (enforced app-side too; this is the backstop).
create policy edge_party on "relationship_edge"
  for select using (
    exists (select 1 from "account" a
            where a."personId" = "relationship_edge"."adultId"
              and a."authUserId" = auth.uid()::text)
    or exists (select 1 from "account" a
            where a."personId" = "relationship_edge"."grantedBy"
              and a."authUserId" = auth.uid()::text)
  );

create policy edge_grant on "relationship_edge"
  for insert with check (
    exists (select 1 from "account" a
            where a."personId" = "relationship_edge"."grantedBy"
              and a."authUserId" = auth.uid()::text)
  );

create policy pregnancy_owner on "pregnancy"
  for all using (
    exists (select 1 from "account" a
            where a."personId" = "pregnancy"."accountPersonId"
              and a."authUserId" = auth.uid()::text)
  );

-- Wrapped keys: a person reaches only the copies wrapped for them. Escrow
-- copies for a spouse are inserted by the granter but readable by the holder.
create policy wrapped_key_owner on "wrapped_key"
  for all using (
    exists (select 1 from "account" a
            where a."personId" = "wrapped_key"."personId"
              and a."authUserId" = auth.uid()::text)
  );
