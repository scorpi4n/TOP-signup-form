export default function () {
	const formWrapper = document.createElement('div')
	formWrapper.classList.add('form-wrapper')
	formWrapper.innerHTML = `\
	<h2>Let's do this!</h2>
	<form class="grid" id="create-account" action="#" method="get" autocomplete="off">
		<div>
			<label for="first_name">First Name*</label>
			<input required type="text" name="first_name" id="first_name" />
		</div>
		<div>
			<label for="last_name">Last Name</label>
			<input type="text" name="last_name" id="last_name" />
		</div>
		<div>
			<label for="email">Email*</label>
			<input required type="email" name="email" id="email" />
		</div>
		<div>
			<label for="phone_number">Phone Number</label>
			<input type="tel" name="phone_number" id="phone_number" />
		</div>
		<div>
			<label for="password">Password*</label>
			<input required type="password" name="password" id="password" />
		</div>
		<div>
			<label for="confirm-password">Confirm Password*</label>
			<input required type="password" name="password" id="confirm-password" />
		</div>
	</form>
	`

	return formWrapper
}