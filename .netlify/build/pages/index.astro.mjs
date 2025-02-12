import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bu4av6DS.mjs';
import { $ as $$Layout } from '../chunks/Layout_AjO-AXGy.mjs';
import { a as $$Picture } from '../chunks/_astro_assets_DXp8B2VO.mjs';
export { renderers } from '../renderers.mjs';

const aerial = new Proxy({"src":"/_astro/aerial.ColpsOQB.webp","width":2000,"height":958,"format":"webp"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/design3/Jeff/www/Riverscape/www/src/img/aerial.webp";
							}
							
							return target[name];
						}
					});

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const title = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="wasaga"> ${renderComponent($$result2, "Picture", $$Picture, { "src": aerial, "formats": ["avif", "webp"], "loading": "eager", "alt": "Riverscape A Natural Wasaga Enclave" })} </section> ` })}`;
}, "/Users/design3/Jeff/www/Riverscape/www/src/pages/index.astro", void 0);

const $$file = "/Users/design3/Jeff/www/Riverscape/www/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
