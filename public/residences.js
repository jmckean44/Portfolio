document.addEventListener('DOMContentLoaded', function () {
	const getResidenceData = async () => {
		try {
			const res = await fetch('/residences.json');
			if (!res.ok) {
				throw new Error(`HTTP error! status: ${res.status}`); // Handle HTTP errors
			}
			const data = await res.json(); // Parse residence.json file
			const residenceData = Object.values(data);

			if (!Array.isArray(residenceData) || !residenceData.every((item) => typeof item === 'object')) {
				throw new Error('Invalid residence data format');
			}

			// GABRIEL {"GF" : "/image1.jpg","L1" : "/image1.jpg","L2" : "/image1.jpg"}

			//console.log(residenceData);

			// RESIDENCE FEATURES
			const D1Features = [
				'Apartment building with 9 floors, Top floors dedicated to Penthouse Residences',
				'Lobby entrance and garage access fronting the Main Road and Hotel Arrival Plaza',
				'Connected with the Hotel by an enclosed pedestrian bridge',
				'Garden and Infinity Pool, Event Place Pavilion and Outdoor Bar, Guest Services Lounge with connection to Hotel',
				'Extended Green Roofs and terraces',
				'Feature 6',
				'Immediate proximity to Hotel, The Grotto Spa and Hilltop Welcome Centre',
			];

			// VILLA FEATURES
			const A1Features = [
				'Plot Size: 757.73 m2',
				'10 Villas with 3-5 bedrooms, ranging between 5166 sf and 8826 sf',
				'Open-concept Living Room/Dining/Kitchen with Chef Pantry and Wine Display, Elegant Study/Den',
				'Generous Spa-like Ensuites',
				'Lower level Guest Unit open to the garden and seashore',
				'Multipurpose Room – with flexibility for Fitness, Home Theatre or Wine Tasting/Konoba, Sauna & Bath',
				'Extended terraces with Sundeck & Infinity Pool, Outdoor Shower, Patio and Outdoor Dining',
				'Secret Garden - with outdoor fireplace',
				'Carpark',
			];

			// SELECT ELEMENT CHANGE EVENT CHOICES
			const bedroomNumber = document.querySelector('#bedroomNumber');
			const residenceType = document.querySelector('#residenceType');
			const suites = document.querySelector('#suites');
			const residencePlans = document.querySelector('.residence-plans');

			// FUNCTIONS
			function removeDisabledResidenceType() {
				residenceType.removeAttribute('disabled');
			}

			function removeDisabledSuites() {
				suites.removeAttribute('disabled');
			}

			function toggleFade() {
				planImage.classList.remove('fadeIn');
			}

			// UPDATE RESIDENCE DETAILS
			function updateResidenceDetails(residence) {
				const residenceDetailsHTML = `
						<div class="details">
								<h3 class="residence-name">${residence.residenceName}</h3>
								<h5 class="number-rooms">${residence.numOfRooms}</h5>
								<div class="plan-links">
										<a class="floorplan active" role="link" aria-label="LOAD FLOORPLAN">FLOORPLAN</a>
										<span class="divider">|</span>
										<a class="siteplan" role="link" aria-label="LOAD SITEPLAN">SITEPLAN</a>
								</div>
								<div><a class="download" target="_blank" role="link" aria-label="DOWNLOAD PDF" href="${residence.downloadURL}">DOWNLOAD PDF</a></div>
								<div><a class="viewbook" target="_blank" role="link" aria-label="VIEW BOOK" href="${residence.viewBookURL}">VIEW BOOK</a></div>
								<h5 class="features">KEY FEATURES</h5>
								<ul class="features-list">
										${D1Features.map((feature) => `<li>${feature}</li>`).join('')}
								</ul>
						</div>
						<div class="plan">
								<img class="plan-image" src="${residence.floorplanURL}" loading="lazy" alt="${residence.floorplanAlt}">
						</div>`;

				residencePlans.innerHTML = residenceDetailsHTML;

				const floorplan = document.querySelector('.floorplan');
				const siteplan = document.querySelector('.siteplan');
				const planImage = document.querySelector('.plan-image');

				floorplan.addEventListener('click', function (event) {
					event.preventDefault();
					planImage.classList.add('fadeIn');
					planImage.setAttribute('src', residence.floorplanURL);
					planImage.setAttribute('alt', residence.floorplanAlt);
					siteplan.classList.remove('active');
					floorplan.classList.add('active');
					setTimeout(toggleFade, 500);
				});

				siteplan.addEventListener('click', function (event) {
					event.preventDefault();
					planImage.classList.add('fadeIn');
					planImage.setAttribute('src', residence.siteplanURL);
					planImage.setAttribute('alt', residence.siteplanAlt);
					floorplan.classList.remove('active');
					siteplan.classList.add('active');
					setTimeout(toggleFade, 500);
				});
			}

			// UPDATE VILLA DETAILS
			function updateVillaDetails(residence) {
				const villaDetailsHTML = `
						<div class="details">
								<h3 class="residence-name">${residence.residenceName}</h3>
								<h4 class="villas-name">${residence.villaName}</h4>														
								<h5 class="number-rooms">${residence.numOfRooms}</h5>
								<h5 class="select-level">SELECT LEVEL</h5>
								<select name="floorLevel" id="floorLevel">
									<option value="ground">GROUND LEVEL</option>
									<option value="garden">GARDEN LEVEL</option>
									<option value="upper">UPPER LEVEL</option>
									<option value="rooftop">ROOFTOP</option>
								</select>
								<div class="plan-links">
									<a class="floorplan active" role="link" aria-label="LOAD FLOORPLAN">FLOORPLAN</a>
									<span class="divider">|</span>
									<a class="siteplan" role="link" aria-label="LOAD SITEPLAN">SITEPLAN</a>	
									<div><a class="download" target="_blank" role="link" aria-label="DOWNLOAD PDF" href="${residence.downloadURL}">DOWNLOAD PDF</a></div>															
									<div><a class="viewbook" target="_blank" role="link" aria-label="VIEW BOOK" href="${residence.viewBookURL}">VIEW BOOK</a></div>	
								</div>															
								<h5 class="features">KEY FEATURES</h5>
								<ul class="features-list">
									${A1Features.map((feature) => `<li>${feature}</li>`).join('')}														
								</ul>
						</div>
						<div class="plan">
								<img class="plan-image" src="${residence.floorplanURL}" loading="lazy" alt="${residence.floorplanAlt}">
						</div>`;

				residencePlans.innerHTML = villaDetailsHTML;

				// SWAP FLOORPLAN/SITEPLANS
				const floorLevel = document.querySelector('#floorLevel');
				const floorplan = document.querySelector('.floorplan');
				const siteplan = document.querySelector('.siteplan');
				const planImage = document.querySelector('.plan-image');

				// UPDATE PLAN IMAGE FUNCTION
				function updatePlanImage(src, alt) {
					planImage.classList.add('fadeIn');
					planImage.setAttribute('src', src);
					planImage.setAttribute('alt', alt);
					setTimeout(() => planImage.classList.remove('fadeIn'), 500);
				}

				// VILLAS FLOOR LEVEL CHANGE EVENTS
				floorLevel.addEventListener('change', function () {
					floorplan.classList.add('active');
					siteplan.classList.remove('active');

					if (planImage.src === residence.siteplanURL) {
						updatePlanImage(residence.floorplanURL, residence.floorplanAlt);
					} else {
						switch (floorLevel.value) {
							case 'ground':
								updatePlanImage(residence.floorplanURL, residence.floorplanAlt);
								break;
							case 'garden':
								updatePlanImage(residence.gardenURL, residence.gardenAlt);
								break;
							case 'upper':
								updatePlanImage(residence.upperURL, residence.upperAlt);
								break;
							case 'rooftop':
								updatePlanImage(residence.rooftopURL, residence.rooftopAlt);
								break;
							default:
								updatePlanImage(residence.floorplanURL, residence.floorplanAlt);
								break;
						}
					}
				});

				// FLOORPLAN CLICK EVENTS
				floorplan.addEventListener('click', function (event) {
					event.preventDefault();
					planImage.classList.add('fadeIn');
					planImage.setAttribute('src', residence.floorplanURL);
					planImage.setAttribute('alt', residence.floorplanAlt);
					siteplan.classList.remove('active');
					floorplan.classList.add('active');
					setTimeout(toggleFade, 500);
				});

				// SITEPLAN CLICK EVENTS
				siteplan.addEventListener('click', function (event) {
					event.preventDefault();
					planImage.classList.add('fadeIn');
					floorplan.classList.remove('active');
					siteplan.classList.add('active');
					planImage.setAttribute('src', residence.siteplanURL);
					planImage.setAttribute('alt', residence.siteplanAlt);
					floorLevel.value = 'ground';
					setTimeout(toggleFade, 500);
				});
			}

			// CALL RESIDENCE SUITE OPTION VALUES
			function callSuiteOptionValues() {
				suites.addEventListener('change', function () {
					const selectedSuite = suites.value;
					const residence = residenceData.find((res) => res.suiteNumber === selectedSuite);
					if (residence) {
						console.log(selectedSuite, residence.suiteNumber);
						updateResidenceDetails(residence);
					} else {
						const residenceDetailsHTML = `
								<div class="details">
										<h4 class="residence-name">There are no plans to display.</h4>									
								</div>
								`;
						residencePlans.innerHTML = residenceDetailsHTML;
					}
				});
			}

			// CALL VILLA OPTION VALUES
			function callVillaOptionValues() {
				suites.addEventListener('change', function () {
					const selectedSuite = suites.value;
					const residence = residenceData.find((res) => res.suiteNumber === selectedSuite);
					if (residence) {
						console.log(selectedSuite, residence.suiteNumber);
						updateVillaDetails(residence);
					} else {
						const villaDetailsHTML = `
								<div class="details">
										<h4 class="residence-name">There are no plans to display.</h4>									
								</div>
								`;
						residencePlans.innerHTML = villaDetailsHTML;
					}
				});
			}

			// NUMBER OF BEDROOMS / RESIDENCE TYPE / SUITES (select change events)
			bedroomNumber.addEventListener('change', function () {
				if (residenceType.value !== 'disabled' && suites.value !== 'disabled') {
					suites.setAttribute('disabled', 'disabled');
					suites.innerHTML = "<option value='disabled'>SELECT SUITE</option>";
				}

				switch (bedroomNumber.value) {
					case 'disabled':
						residenceType.setAttribute('disabled', 'disabled');
						residenceType.innerHTML = "<option value='disabled'>RESIDENCE TYPE</option>";
						suites.setAttribute('disabled', 'disabled');
						suites.innerHTML = "<option value='disabled'>SELECT SUITE</option>";
						break;

					case '1 Bedroom':
						removeDisabledResidenceType();

						residenceType.innerHTML =
							"<option value=''>RESIDENCE TYPE</option><option value='D1'>D1 - Terraced Residences</option><option value='E1'>E1 - Lungomare Residences</option><option value='E2'>E2 - Lungomare Residences</option><option value='E3'>E3 - Waterfront Residences</option>";

						residenceType.addEventListener('change', function () {
							if (residenceType.value === 'D1') {
								removeDisabledSuites();
								suites.innerHTML =
									"<option value=''>SELECT SUITE</option><option value='101'>101</option><option value='102'>102</option><option value='103'>103</option><option value='104'>104</option><option value='201'>201</option><option value='202'>202</option><option value='203'>203</option><option value='204'>204</option><option value='301'>301</option><option value='302'>302</option><option value='303'>303</option><option value='304'>304</option><option value='401'>401</option><option value='402'>402</option><option value='404'>404</option><option value='405'>405</option><option value='502'>502</option><option value='503'>503</option><option value='504'>504</option>504<option value='505'>505</option><option value='603'>603</option>";
							} else if (residenceType.value === 'E1') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='102'>102</option>";
							} else if (residenceType.value === 'E2') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='102'>102</option>";
							} else if (residenceType.value === 'E3') {
								removeDisabledSuites();
								suites.innerHTML =
									"<option value=''>SELECT SUITE</option><option value='001'>001</option><option value='003'>003</option><option value='101'>101</option><option value='103'>103</option><option value='104'>104</option>";
							} else {
								suites.setAttribute('disabled', 'disabled');
								suites.innerHTML = "<option value=''>SELECT SUITE</option>";
							}
						});
						break;

					case '2 Bedrooms':
						removeDisabledResidenceType();
						residenceType.innerHTML =
							"<option value=''>RESIDENCE TYPE</option><option value='D1'>D1 - Terraced Residences</option><option value='E1'>E1 - Lungomare Residences</option><option value='E2'>E2 - Lungomare Residences</option><option value='E3'>E3 - Waterfront Residences</option>";

						residenceType.addEventListener('change', function () {
							if (residenceType.value === 'D1') {
								removeDisabledSuites();
								suites.innerHTML =
									"<option value=''>SELECT SUITE</option><option value='305'>305</option><option value='306'>306</option><option value='403'>403</option><option value='601'>601</option><option value='602'>602</option>";

								callSuiteOptionValues();
							} else if (residenceType.value === 'E1') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='101'>101</option><option value='201'>201</option>";
								//callSuiteOptionValues();
							} else if (residenceType.value === 'E2') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='101'>101</option><option value='103'>103</option><option value='201'>201</option>";
								//callSuiteOptionValues();
							} else if (residenceType.value === 'E3') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='002'>002</option><option value='102'>102</option>";
								callSuiteOptionValues();
							} else {
								suites.setAttribute('disabled', 'disabled');
								suites.innerHTML = "<option value=''>SELECT SUITE</option>";
							}
						});
						break;

					case '3 Bedrooms':
						removeDisabledResidenceType();
						residenceType.innerHTML =
							"<option value=''>RESIDENCE TYPE</option><option value='D1'>D1 - Terraced Residences</option><option value='E1'>E1 - Lungomare Residences</option><option value='E2'>E2 - Lungomare Residences</option><option value='E3'>E3 - Waterfront Residences</option><option value='Seaside Villa Residences'>Seaside Villa Residences</option>";
						residenceType.addEventListener('change', function () {
							if (residenceType.value === 'D1') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='501'>501</option><option value='PH 604'>PH 604</option><option value='PH 701'>PH 701</option>";
							} else if (residenceType.value === 'E1') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='103'>103</option><option value='202'>202</option><option value='PH 301'>PH 301</option>";
							} else if (residenceType.value === 'E2') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='202'>202</option><option value='PH 301'>PH 301</option>";
							} else if (residenceType.value === 'E3') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='201'>201</option><option value='202'>202</option>";
							} else if (residenceType.value === 'Seaside Villa Residences') {
								removeDisabledSuites();
								suites.innerHTML = "<option value=''>SELECT SUITE</option><option value='A7'>A7 - Villa Iris</option><option value='A8'>A8 - Villa Cypress</option>";
							} else {
								suites.setAttribute('disabled', 'disabled');
								suites.innerHTML = "<option value=''>SELECT SUITE</option>";
							}
						});
						break;

					case '4 Bedrooms':
						removeDisabledResidenceType();
						residenceType.innerHTML = "<option value=''>RESIDENCE TYPE</option><option value='Seaside Villa Residences'>Seaside Villa Residences</option>";
						residenceType.addEventListener('change', function () {
							if (residenceType.value === 'Seaside Villa Residences') {
								removeDisabledSuites();
								suites.innerHTML =
									"<option value=''>SELECT SUITE</option><option value='A1'>A1 - Villa Lanterna</option><option value='A2 - Villa Stonepine'>A2 - Villa Stonepine</option><option value='A3 - Villa Seabreeze'>A3 - Villa Seabreeze</option><option value='A4 - Villa Garden'>A4 - Villa Garden</option><option value='A5 - Villa Atrium'>A5 - Villa Atrium</option><option value='A6 - Villa Belvedere'>A6 - Villa Belvedere</option><option value='A9 - Villa Cascades'>A9 - Villa Cascades</option><option value='A10 - Villa Campanella'>A10 - Villa Campanella</option>";

								callVillaOptionValues();
							} else {
								suites.setAttribute('disabled', 'disabled');
								suites.innerHTML = "<option value=''>SELECT SUITE</option>";
							}
						});
						break;
					default:
						residenceType.setAttribute('disabled', 'disabled');
						suites.setAttribute('disabled', 'disabled');
						break;
				}
			}); // END OF bedroomNumber CHANGE EVENT
		} catch (error) {
			console.error('Error fetching residence data:', error);
		}
	};

	getResidenceData();
}); // END DOCUMENT LOAD
