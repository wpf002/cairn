// Metro configuration for a pnpm workspace.
//
// Without this, Metro resolves from the repository root and cannot find the
// app entry, and it cannot follow the symlinks pnpm uses for the @cairn/*
// workspace packages. Both watchFolders and nodeModulesPaths are required:
// the first so edits inside packages/ trigger a reload, the second so Metro
// looks in the workspace root's node_modules as well as the app's.
const { getDefaultConfig } = require('expo/metro-config');
const path = require('node:path');

const projectRoot = __dirname;
const workspaceRoot = path.resolve(projectRoot, '../..');

const config = getDefaultConfig(projectRoot);

config.watchFolders = [workspaceRoot];
config.resolver.nodeModulesPaths = [
  path.resolve(projectRoot, 'node_modules'),
  path.resolve(workspaceRoot, 'node_modules'),
];
// pnpm stores every package once and symlinks it into place, so Metro has to
// follow symlinks. Hierarchical lookup stays ON: pnpm does not hoist, and
// disabling it stops Metro walking up to the transitive dependencies that
// only exist in the workspace root's store.
config.resolver.unstable_enableSymlinks = true;

/*
 * The @cairn/* packages are TypeScript source consumed directly, and they use
 * ESM-style specifiers ('./child.js') that refer to './child.ts' on disk —
 * required by the packages' NodeNext-style tsconfig, and standard for
 * TypeScript ESM. Node and tsc understand that mapping; Metro does not, and
 * fails on the literal .js path.
 *
 * This rewrites a failed relative '.js' specifier to its '.ts'/'.tsx' source
 * before giving up. It only fires on the fallback path, so a genuine .js file
 * still wins, and it is scoped to relative specifiers so nothing in
 * node_modules is affected.
 */
const upstreamResolve = config.resolver.resolveRequest;

config.resolver.resolveRequest = (context, moduleName, platform) => {
  const resolve = upstreamResolve ?? context.resolveRequest;
  try {
    return resolve(context, moduleName, platform);
  } catch (error) {
    if (moduleName.startsWith('.') && moduleName.endsWith('.js')) {
      const base = moduleName.slice(0, -3);
      for (const ext of ['.ts', '.tsx']) {
        try {
          return resolve(context, base + ext, platform);
        } catch {
          // fall through to the next extension
        }
      }
    }
    throw error;
  }
};

module.exports = config;
