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

// ADD ID TO BODY
document.addEventListener('DOMContentLoaded', function () {
	const body = document.querySelector('body');

	if (window.location.href.indexOf('/') > -1) {
		body.setAttribute('id', 'home');
	}

	if (window.location.href.indexOf('/new') > -1) {
		body.setAttribute('id', 'new');
	}

	if (window.location.href.indexOf('/about') > -1) {
		body.setAttribute('id', 'about');
	}

	if (window.location.href.indexOf('/contact') > -1) {
		body.setAttribute('id', 'contact');
	}

	if (window.location.href.indexOf('/thankyou') > -1) {
		body.setAttribute('id', 'thankyou');
	}
});

// CHUCK NORRIS JOKE GENERATOR
// const jokeEl = document.getElementById('joke');
// const jokeBtn = document.getElementById('joke-btn');

// const generateJoke = () => {
// 	const xhr = new XMLHttpRequest();

// 	xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

// 	xhr.onreadystatechange = function () {
// 		if (this.readyState === 4) {
// 			if (this.status === 200) {
// 				// console.log(JSON.parse(this.responseText).value);
// 				jokeEl.innerHTML = JSON.parse(this.responseText).value;
// 			} else {
// 				jokeEl.innerHTML = 'Something Went Wrong (Not Funny)';
// 			}
// 	}

// 	}
// 	xhr.send();
// };

// jokeBtn.addEventListener('click', generateJoke);
// document.addEventListener('DOMContentLoaded', generateJoke);





//TOOLTIP
// const tooltips = document.querySelectorAll("[data-tooltip]");

// const displayTooltip = (e) => {
// 	const trigger = e.target;
// 	const tooltip = trigger.querySelector("[role=tooltip]");

// 	const { x, y, width, height } = trigger.getBoundingClientRect();
// 	tooltip.style.left = `${Math.floor(x + width / 2)}px`;
// 	tooltip.style.top = `${Math.floor(y + height)}px`;

// 	tooltip.classList.add("active");
// };

// const hideTooltip = (e) => {
// 	const tooltip = e.target.querySelector("[role=tooltip]");
// 	tooltip.classList.remove("active");
// };

// const DELAY = 300;
// let tooltipTimer = null;

// tooltips.forEach((trigger) => {
// 	let tooltip = document.createElement("div");

// 	tooltip.setAttribute("role", "tooltip");
// 	tooltip.setAttribute("inert", true);
// 	tooltip.textContent = trigger.dataset.tooltip;

// 	trigger.appendChild(tooltip);

// 	trigger.addEventListener("mouseenter", (e) => {
// 		clearTimeout(tooltipTimer);

// 		tooltipTimer = setTimeout(() => {
// 			displayTooltip(e);
// 		}, DELAY);
// 	});

// 	trigger.addEventListener("mouseleave", (e) => {
// 		clearTimeout(tooltipTimer);
// 		hideTooltip(e);
// 	});
// });
