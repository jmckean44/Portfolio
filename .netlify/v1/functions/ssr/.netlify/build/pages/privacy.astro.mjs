import { c as createComponent, r as renderTemplate, a as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_Bu4av6DS.mjs';
import { $ as $$Layout } from '../chunks/Layout_AjO-AXGy.mjs';
export { renderers } from '../renderers.mjs';

const $$Privacy = createComponent(($$result, $$props, $$slots) => {
  const title = "";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="privacy"> <div class="container top btm"> <div class="flex"> <div class="cell small-18"> <h1>PRIVACY POLICY</h1> <p>
When you visit our web site, you can request to be notified of what information this site gathers/tracks about you, what this site does with the information it gathers/tracks, with whom
						this site shares the information it gathers/tracks, this site's &quot;opt-out&quot; policy, this site's policy on correcting and updating personally identifiable information, and this
						site's policy on deleting or deactivating your name from our database.<br> <br> </p><h4>CUSTOMER CONTACT</h4> <p>
We may from time to time contact you by electronic or postal mail so that you can receive information, or special offers. If you do not want to receive mailings and offers using your
							postal or electronic mail address, let us know by sending us an <a href="mailto:admin@pbmarketing.ca?subject=PLEASE REMOVE ME"><strong>e-mail</strong></a> and we will remove you from our
							database.<br> <br> </p><h4>DATABASE MANAGEMENT</h4> <p>
If you have provided information and wish in the future that we stop using this information or if you wish to update or change your information, you can <a href="mailto:admin@pbmarketing.ca?subject=Information Inquiry"><strong>send us your request</strong></a> and we will be glad to modify or delete the information in our database.
</p> <br> <h4>Q &amp; A</h4> <p>
Any questions regarding this statement or our website should be directed to the <a href="mailto:admin@pbmarketing.ca?subject=Privacy Policy Inquiry"><strong>website coodinator</strong>.</a> <br><br><br><a href="javascript:history.go(-1);">BACK</a> </p>   </div> </div> </div> </section>` })}`;
}, "/Users/design3/Jeff/www/Riverscape/www/src/pages/privacy.astro", void 0);

const $$file = "/Users/design3/Jeff/www/Riverscape/www/src/pages/privacy.astro";
const $$url = "/privacy";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Privacy,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
