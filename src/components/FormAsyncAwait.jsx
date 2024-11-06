
function RegisterForm() {

	const form = document.querySelector('#mc-embedded-subscribe-form');

	form.addEventListener('submit', function (e) {
		e.preventDefault();
	});
	
	const btn = document.querySelector('.button');	

	const clickHandler = async () => {
		try {
			const res = await fetch('https://reqres.in/api/users', {// variable holds promise results
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify()
		}); 
			const data = await res.json();
	
			if (!res.ok) {
				console.log(data.description);
				return;
			}
	
			console.log(data.data[2].email);
		} catch (error) {
			console.log(error);
		}
	};	

btn.addEventListener('click', clickHandler);

return (

<form id="mc-embedded-subscribe-form">
	<div>
		<label for="firstName" class="visuallyhidden"> First Name </label>
		<input type="text" id="firstName" placeholder="First Name" name="firstName" />
	</div>

	<div>
		<label for="lastName" class="visuallyhidden"> Last Name </label>
		<input type="text" id="lastName" placeholder="Last Name *" name="lasttName" />
	</div>

	<div>
		<label for="email" class="visuallyhidden"> Email </label>
		<input type="email" id="email" placeholder="Email *" name="email" />
	</div>

	<div>
		<label for="phone" class="visuallyhidden"> Phone </label>
		<input type="tel" id="phone" placeholder="Phone" name="phone" />
	</div>

	<div>
		<select name="hear" class="select">
			<option value="">How did you hear about us?</option>
			<option value="Billboard">Billboard</option>
			<option value="Signage">Signage</option>
			<option value="Social Media">Social Media</option>
			<option value="Google">Google</option>
			<option value="Word of Mouth">Word of Mouth</option>
		</select>
	</div>

	<div class="radio-inputs">
		<p>Are You A Broker?</p>
		<label class="label" for="broker">
			<input name="broker" class="radio-input" type="radio" value="Yes" />
			YES
		</label>
		<label class="label" for="broker">
			<input name="broker" class="radio-input" type="radio" value="No" />
			NO
		</label>
	</div>

	<div>
		<label for="comments" class="visuallyhidden"> Comments </label>
		<textarea rows="5" id="comments" placeholder="Comments" name="comments"></textarea>
		<span class="helperText">Comments</span>
	</div>

	<div class="submit-button">
		<button type="submit" class="button">submit</button>
	</div>
</form>
	);
}

export default RegisterForm;