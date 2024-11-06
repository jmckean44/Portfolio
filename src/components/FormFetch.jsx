
function RegisterForm() {

const form = document.querySelector('form');

form.addEventListener('click', function (e) {
	e.preventDefault();
});

const btn = document.querySelector('.button');

const clickHandler = () => {
	fetch('https://reqres.in/api/users')
		.then((res) => {
			if (!res.ok) {
				console.log('problem');
				return;
			}
			return res.json();
		})
		.then((data) => {
			console.log(data.data[3].first_name);
		})
		.catch((error) => {
			console.log(error);
		});
};

btn.addEventListener('click', clickHandler);

// return (

// <form id="mc-embedded-subscribe-form">
// 	<div>
// 		<label htmlFor="firstName" className="visuallyhidden"> First Name </label>
// 		<input type="text" id="firstName" placeholder="First Name" name="firstName" />
// 	</div>

// 	<div>
// 		<label htmlFor="lastName" className="visuallyhidden"> Last Name </label>
// 		<input type="text" id="lastName" placeholder="Last Name *" name="lasttName" />
// 	</div>

// 	<div>
// 		<label htmlFor="email" className="visuallyhidden"> Email </label>
// 		<input type="email" id="email" placeholder="Email *" name="email" />
// 	</div>

// 	<div>
// 		<label htmlFor="phone" className="visuallyhidden"> Phone </label>
// 		<input type="tel" id="phone" placeholder="Phone" name="phone" />
// 	</div>

// 	<div>
// 		<select name="hear" className="select">
// 			<option value="">How did you hear about us?</option>
// 			<option value="Billboard">Billboard</option>
// 			<option value="Signage">Signage</option>
// 			<option value="Social Media">Social Media</option>
// 			<option value="Google">Google</option>
// 			<option value="Word of Mouth">Word of Mouth</option>
// 		</select>
// 	</div>

// 	<div className="radio-inputs">
// 		<p>Are You A Broker?</p>
// 		<label className="label" htmlFor="broker">
// 			<input name="broker" className="radio-input" type="radio" value="Yes" />
// 			YES
// 		</label>
// 		<label className="label" htmlFor="broker">
// 			<input name="broker" className="radio-input" type="radio" value="No" />
// 			NO
// 		</label>
// 	</div>

// 	<div>
// 		<label htmlFor="comments" className="visuallyhidden"> Comments </label>
// 		<textarea rows="5" id="comments" placeholder="Comments" name="comments"></textarea>
// 		<span className="helperText">Comments</span>
// 	</div>

// 	<div className="submit-button">
// 		<button type="submit" className="button">submit</button>
// 	</div>
// </form>
// 	)
}

export default RegisterForm;