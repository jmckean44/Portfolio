import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as createAstro, d as addAttribute, a as renderComponent, e as renderSlot, f as renderHead } from './astro/server_Bu4av6DS.mjs';
/* empty css                         */
import { $ as $$Image } from './_astro_assets_DXp8B2VO.mjs';

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$ThemeIcon = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="controls"> <button id="themeToggle"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path class="sun" fill-rule="evenodd" d="M12 17.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zm0 1.5a7 7 0 1 0 0-14 7 7 0 0 0 0 14zm12-7a.8.8 0 0 1-.8.8h-2.4a.8.8 0 0 1 0-1.6h2.4a.8.8 0 0 1 .8.8zM4 12a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h2.5a.8.8 0 0 1 .8.8zm16.5-8.5a.8.8 0 0 1 0 1l-1.8 1.8a.8.8 0 0 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM6.3 17.7a.8.8 0 0 1 0 1l-1.7 1.8a.8.8 0 1 1-1-1l1.7-1.8a.8.8 0 0 1 1 0zM12 0a.8.8 0 0 1 .8.8v2.5a.8.8 0 0 1-1.6 0V.8A.8.8 0 0 1 12 0zm0 20a.8.8 0 0 1 .8.8v2.4a.8.8 0 0 1-1.6 0v-2.4a.8.8 0 0 1 .8-.8zM3.5 3.5a.8.8 0 0 1 1 0l1.8 1.8a.8.8 0 1 1-1 1L3.5 4.6a.8.8 0 0 1 0-1zm14.2 14.2a.8.8 0 0 1 1 0l1.8 1.7a.8.8 0 0 1-1 1l-1.8-1.7a.8.8 0 0 1 0-1z"></path> <path class="moon" fill-rule="evenodd" d="M16.5 6A10.5 10.5 0 0 1 4.7 16.4 8.5 8.5 0 1 0 16.4 4.7l.1 1.3zm-1.7-2a9 9 0 0 1 .2 2 9 9 0 0 1-11 8.8 9.4 9.4 0 0 1-.8-.3c-.4 0-.8.3-.7.7a10 10 0 0 0 .3.8 10 10 0 0 0 9.2 6 10 10 0 0 0 4-19.2 9.7 9.7 0 0 0-.9-.3c-.3-.1-.7.3-.6.7a9 9 0 0 1 .3.8z"></path> </svg> </button> <a class="github" href="https://github.com/jmckean44" target="_blank" role="button" arial-label="GitHub icon"></a> </div> <script>\n	document.addEventListener("astro:page-load", () => {\n		const theme = (() => {\n			if (\n				typeof localStorage !== "undefined" &&\n				localStorage.getItem("theme")\n			) {\n				return localStorage.getItem("theme");\n			}\n			if (window.matchMedia("(prefers-color-scheme: dark)").matches) {\n				return "dark";\n			}\n			return "light";\n		})();\n\n		if (theme === "light") {\n			document.documentElement.classList.remove("dark");\n		} else {\n			document.documentElement.classList.add("dark");\n		}\n\n		window.localStorage.setItem("theme", theme);\n\n		const handleToggleClick = () => {\n			const element = document.documentElement;\n			element.classList.toggle("dark");\n\n			const isDark = element.classList.contains("dark");\n			localStorage.setItem("theme", isDark ? "dark" : "light");\n		};\n\n		document\n			.getElementById("themeToggle")\n			.addEventListener("click", handleToggleClick);\n	});\n<\/script>'])), maybeRenderHead());
}, "/Users/design3/Jeff/www/Riverscape/www/src/components/ThemeIcon.astro", void 0);

const $$Astro$1 = createAstro("https://riverscape.ca");
const $$Header = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Header;
  const pathname = new URL(Astro2.request.url).pathname;
  const currentPath = pathname.slice(1);
  return renderTemplate`${maybeRenderHead()}<a class="skip-navigation" href="#main-content">Skip to main content</a> <header id="header" class="header header--white"> <div class="header-container"> <div id="logo-desktop"> <a href="/" aria-label="Logo" role="link"></a> </div> <nav id="nav-desktop" role="navigation"> <ul class="nav-links"> <li> <a${addAttribute(currentPath === "" ? "active" : "", "class")} href="/" role="link" aria-label="link to Homepage">HOME</a> </li> <li> <a${addAttribute(currentPath === "work" ? "active" : "", "class")} role="link" aria-label="link to LOCATION page">LOCATION</a> </li> <li> <a${addAttribute(currentPath === "contact" ? "active" : "", "class")} href="/residences" role="link" aria-label="link to residences page">RESIDENCES</a> </li> <li> <a${addAttribute(currentPath === "contact" ? "active" : "", "class")} href="#register" role="link" aria-label="link to FEATURES page">FEATURES</a> </li> <li> <a${addAttribute(currentPath === "contact" ? "active" : "", "class")} href="#register" role="link" aria-label="link to BUILDER page">BUILDER</a> </li> <li> <a${addAttribute(currentPath === "contact" ? "active" : "", "class")} href="#register" role="link" aria-label="link to contact page">CONTACT</a> </li> <li class="register"> <a${addAttribute(currentPath === "contact" ? "active" : "", "class")} href="#register" role="link" aria-label="link to REGISTER page">REGISTER</a> </li> </ul> </nav> ${renderComponent($$result, "ThemeIcon", $$ThemeIcon, {})} </div> </header> <div id="nav-mobile"> <div id="toggle" class="toggle"> <span>menu</span> <span>close</span> <div class="toggle__wrapper"> <div class="toggle-bar first-bar"></div> <div class="toggle-bar second-bar"></div> <div class="toggle-bar third-bar"></div> </div> </div> <div id="overlay" class="overlay overlay--state"> <div class="overlay__container"> <nav id="nav" class="nav"> <menu id="menu" class="nav__menu"> <li class="nav__item"> <a href="/" class="nav__link" role="link" aria-label="link to Homepage">HOME</a> </li> <li class="nav__item"> <a href="/community" class="nav__link" role="link" aria-label="link to Community page">COMMUNITY</a> </li> <li class="nav__item"> <a href="/residences" class="nav__link" role="link" aria-label="link to residences page">RESIDENCES</a> </li> <li class="nav__item"> <a href="/contact" class="nav__link" role="link" aria-label="link to contact page">CONTACT</a> </li> </menu> </nav> </div> </div> </div>`;
}, "/Users/design3/Jeff/www/Riverscape/www/src/components/Header.astro", void 0);

const upperview = new Proxy({"src":"/_astro/logo-upperview.DQZL03ZO.svg","width":216,"height":56,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/design3/Jeff/www/Riverscape/www/src/img/logo-upperview.svg";
							}
							
							return target[name];
						}
					});

const facebook = new Proxy({"src":"/_astro/icon-facebook.DbJe9oK_.svg","width":40,"height":40,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/design3/Jeff/www/Riverscape/www/src/img/icon-facebook.svg";
							}
							
							return target[name];
						}
					});

const instagram = new Proxy({"src":"/_astro/icon-instagram.hW1yhvK_.svg","width":132,"height":132,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "/Users/design3/Jeff/www/Riverscape/www/src/img/icon-instagram.svg";
							}
							
							return target[name];
						}
					});

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return renderTemplate`${maybeRenderHead()}<footer> <div class="flex padding-x align-middle"> <div class="cell medium-shrink small-18"> <div class="copyright-container"> <div class="copyright"> <p><a href="/privacy" role="link" arial-label="link to privacy policy">Privacy Policy</a></p> <p>© ${currentYear} RIVERSCAPE.COM</p> </div> <div class="social"> <a href="https://www.facebook.com/UpperviewHomes/" target="_blank" role="link" aria-label="link to Upperview Homes on Facebook">${renderComponent($$result, "Image", $$Image, { "src": facebook, "alt": "Upperview Homes on Facebook" })}</a> <a href="https://www.instagram.com/upperviewhomes/" target="_blank" role="link" aria-label="link to Upperview Homes on Instagram">${renderComponent($$result, "Image", $$Image, { "src": instagram, "alt": "Upperview Homes on Instagram" })}</a> </div> </div> </div> <div class="cell auto"></div> <div class="cell medium-shrink small-18"> <a href="https://www.upperviewhomes.com/" target="_blank" role="link" aria-label="link to Upperview Homes website">${renderComponent($$result, "Image", $$Image, { "src": upperview, "class": "upperview", "alt": "Upperview Homes" })}</a> </div> </div> </footer>  `;
}, "/Users/design3/Jeff/www/Riverscape/www/src/components/Footer.astro", void 0);

const title = "RiverScape: A Natural Wasaga Enclave";
const description = "Riverscape is a modern townhome community nestled in a private enclave near the town of Wasaga Beach, Georgian Bay, Ontario. ";
const keywords = "Riverscape, new modern townhomes, townhomes, town of Wasaga Beach, Wasaga Beach, Georgian Bay, Ontario, stone and wood architectural detailing.";
const logo = "./logo.svg";

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://riverscape.ca");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate(_a || (_a = __template(['<html class="lenis" lang="en" dir="ltr"> <head><meta charset="UTF-8"><meta http-equiv="x-ua-compatible" content="ie=edge"><link rel="canonical" href="https://riverscape.ca"><meta name="description"', '><meta name="keywords"', '><meta name="theme-color" content="#002554"><meta name="msapplication-navbutton-color" content="#002554"><meta name="apple-mobile-web-app-status-bar-style" content="#002554"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="generator"', '><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-config" content="img/browserconfig.xml"><meta name="view-transtions" content="same-origin"><meta property="og:title"', '><meta property="og:name"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:description"', `><meta property="og:type" content="website"><link rel="stylesheet" href="https://use.typekit.net/sei4xaf.css"><!-- FAVICONS --><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="manifest" href="/site.webmanifest"><link rel="mask-icon" href="/safari-pinned-tab.svg" color="#a25f53"><link rel="shortcut icon" href="/favicon.ico"><meta name="msapplication-TileColor" content="#ffffff"><meta name="msapplication-config" content="/browserconfig.xml"><meta name="theme-color" content="#ffffff"><!-- IMAGE PRE-LOADS FOR LCP --><!-- <link rel="preload" href={optimizedImage.src} as="image" /> --><!-- JSON-LD  --><script type="application/ld+json">
			{
				"@context": "http://www.schema.org",
				"@type": "LocalBusiness",
				"name": "Riverscape",
				"alternateName": "Riverscape: A Natural Wasaga Enclave",
				"url": "https://riverscape.ca",
				"logo": "https://riverscape.ca/images/logo-lrg.png",
				"image": "https://riverscape.ca/images/logo-lrg.png",
				"description": "Riverscape is a modern townhome community nestled in a private enclave near the town of Wasaga Beach, Georgian Bay, Ontario.",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "",
					"addressLocality": "Ontario",
					"addressRegion": "Wasaga Beach",
					"postalCode": "",
					"addressCountry": "Canada"
				}
			}
		<\/script><script type="speculationrules">
			{
				"prerender": [
					{
						"urls": ["index.html", "thankyou.html"]
					}
				]
			}
		<\/script><!-- GOOGLE TAG (gtag.js) --><script async src="https://www.googletagmanager.com/gtag/js?id=G-BYCY12M7YP"><\/script><script>
			window.dataLayer = window.dataLayer || [];
			function gtag() {
				dataLayer.push(arguments);
			}
			gtag('js', new Date());

			gtag('config', 'G-BYCY12M7YP');
		<\/script><title>`, "</title>", "</head> <body> ", ' <main id="#main-content"> ', " </main> ", " </body></html>"])), addAttribute(description, "content"), addAttribute(keywords, "content"), addAttribute(Astro2.generator, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(description, "content"), addAttribute(logo, "content"), addAttribute(description, "content"), title, renderHead(), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/design3/Jeff/www/Riverscape/www/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
