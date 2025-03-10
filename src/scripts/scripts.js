document.addEventListener('astro:page-load', () => {
	// SMOOTH SCROLLING
	let anchorlinks = document.querySelectorAll('a[href^="#"]');

	for (let item of anchorlinks) {
		item.addEventListener('click', (e) => {
			let hashval = item.getAttribute('href');
			let target = document.querySelector(hashval);
			target.scrollIntoView({
				behavior: 'smooth',
			});
			history.pushState(null, null, hashval);
			e.preventDefault();
		});
	}

	// ADD ID TO BODY// ADD ID TO BODY
	const body = document.querySelector('body');

	const paths = [
		{ path: '/', id: 'home' },
		{ path: '/about', id: 'about' },
		{ path: '/new', id: 'new' },
		{ path: '/contact', id: 'contact' },
	];

	paths.forEach(({ path, id }) => {
		if (window.location.href.indexOf(path) > -1) {
			body.setAttribute('id', id);
		}
	});
});
