import { defineConfig } from 'vitest/config';
import { resolve } from 'node:path';

const pkg = (name: string) => resolve(__dirname, `packages/${name}/src/index.ts`);

export default defineConfig({
  resolve: {
    alias: {
      '@cairn/stages': pkg('stages'),
      '@cairn/framework': pkg('framework'),
      '@cairn/substrate': pkg('substrate'),
      '@cairn/escalation': pkg('escalation'),
      '@cairn/canon': pkg('canon'),
      '@cairn/crypto': pkg('crypto'),
      '@cairn/ai': pkg('ai'),
      '@cairn/trackers': pkg('trackers'),
      '@cairn/dashboard': pkg('dashboard'),
      '@cairn/db': pkg('db'),
    },
  },
  test: {
    include: ['packages/**/test/**/*.test.ts', 'apps/**/test/**/*.test.ts'],
    environment: 'node',
    coverage: { provider: 'v8', reporter: ['text', 'lcov'] },
  },
});
