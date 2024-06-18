# FileLockVitestPlugin
VS Code plugin for vitest locks rollup and esbuild

Run install

_yarn_

Run tests through the plugin so that we know it has been run.

Add a resolution in package.json to force an upgrade/downgrade of either rollup or esbuild.


I.e.

"resolutions": {
    "rollup": "4.17.0"
},

Run install again

_yarn_

Expected result while this problem persists (file path abbreviated):
error Error: EPERM: operation not permitted, unlink '...\FileLockVitestPlugin\node_modules\@rollup\rollup-win32-x64-msvc\rollup.win32-x64-msvc.node'
