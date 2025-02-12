function init() {
	const mobileNav = document.querySelector('.nav-links');

	// https://stackoverflow.com/questions/77278507/astro-javascript-is-not-working-on-page-change
	document.addEventListener('astro:before-swap', () => {}, { once: false });
}

// let scrollpos = window.scrollY;
// const header = document.querySelector('#header');
// const headerHeight = header.offsetHeight;

// const headerSlideUp = () => header.classList.add('relative');
// const headerSlideDown = () => header.classList.remove('relative hidden');

// window.addEventListener('scroll', function () {
// 	scrollpos = window.scrollY;

// 	if (scrollpos >= headerHeight) {
// 		headerSlideUp();
// 	} else {
// 		headerSlideDown();
// 	}
// });

// window.onload = function () {
// 	if (scrollpos >= headerHeight || window.innerWidth < 1000) {
// 		headerSlideUp();
// 	} else {
// 		headerSlideDown();
// 	}
// };

// window.addEventListener('resize', function () {
// 	if (window.innerWidth < 600) {
// 		headerSlideUp();
// 	} else {
// 		headerSlideDown();
// 	}
// });

init();

document.addEventListener('astro:after-swap', init);
