export default function () {
	const password = document.getElementById('password');
	const confirmation = document.getElementById('confirm-password');

	setInterval(() => {
		if (password.value == confirmation.value) {
			password.classList.remove('error');
			confirmation.classList.remove('error');
		} else {
			password.classList.add('error');
			confirmation.classList.add('error');
		}
	}, 1000);
}