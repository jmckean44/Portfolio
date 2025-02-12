import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bu4av6DS.mjs';
import { $ as $$Layout } from '../chunks/Layout_AjO-AXGy.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_DXp8B2VO.mjs';
export { renderers } from '../renderers.mjs';

const logoWh = new Proxy({"src":"/_astro/logo-lrg.BWHblpjb.svg","width":346,"height":244,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/design3/Jeff/www/Riverscape/www/src/img/logo-lrg.svg";
							}
							
							return target[name];
						}
					});

const $$Thankyou = createComponent(($$result, $$props, $$slots) => {
  const title = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="message" role="img" aria-label="Riverscape townhome community aerial location"> <div> ${renderComponent($$result2, "Image", $$Image, { "src": logoWh, "class": "riverscape", "loading": "eager", "alt": "Riverscape: A Natural Wasaga Enclave" })} <h1 style="color:#fff">You have been added to the contact list!</h1> <p style="color:#fff">Stay tuned for updates.</p> <p><em style="font-size:12px;text-align:center;color:#fff">You can unsubscribe by clicking the link at the bottom of any email you receive from us.</em></p> </div> </section> ` })}`;
}, "/Users/design3/Jeff/www/Riverscape/www/src/pages/thankyou.astro", void 0);

const $$file = "/Users/design3/Jeff/www/Riverscape/www/src/pages/thankyou.astro";
const $$url = "/thankyou";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Thankyou,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
