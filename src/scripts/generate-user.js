function fetchUser() {
	showSpinner();
	fetch('https://randomuser.me/api')
		.then((res) => res.json())
		.then((data) => {
			hideSpinner();
			displayUser(data.results[0]);
		});
}

function displayUser(user) {
	const userDisplay = document.querySelector('#user');
	const placeholderBG = document.querySelector('#generate-user');
	const themeBg = document.querySelector('html');

	if (user.gender === 'female') {
		placeholderBG.style.backgroundColor = '#eff3eb ';
	} else {
		placeholderBG.style.backgroundColor = '#f9f9f9';
	}

	userDisplay.innerHTML = ` 
    <img src="${user.picture.large}" width="150" height="150" alt="${user.name.first} ${user.name.last}" />   
      <p>
        <strong class="bold">Name: </strong>${user.name.first} ${user.name.last}
        <br>     
				<strong class="bold">Email: </strong> ${user.email}
        <br>   
				<strong class="bold">Phone: </strong> ${user.phone}
        <br>     
				<strong class="bold">Location: </strong> ${user.location.city} ${user.location.country}
        <br>
				<strong class="bold">Age: </strong> ${user.dob.age}</p>

  `;
}

function showSpinner() {
	document.querySelector('.spinner').style.display = 'block';
}

function hideSpinner() {
	document.querySelector('.spinner').style.display = 'none';
}

document.querySelector('#generate').addEventListener('click', fetchUser);

fetchUser();
