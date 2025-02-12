import { renderers } from './renderers.mjs';
import { s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs';
import { manifest } from './manifest_DnYdDUlV.mjs';
import { createExports } from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/privacy.astro.mjs');
const _page2 = () => import('./pages/register.astro.mjs');
const _page3 = () => import('./pages/thankyou.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');


const pageMap = new Map([
    ["node_modules/.pnpm/astro@4.16.10_@types+node@22.9.0_rollup@4.24.4_sass@1.80.6_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/privacy.astro", _page1],
    ["src/pages/register.astro", _page2],
    ["src/pages/thankyou.astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: undefined
});
const _args = {
    "middlewareSecret": "c5be60cf-3049-4266-9116-1b02e1e9d02d"
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
