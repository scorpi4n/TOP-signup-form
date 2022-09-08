let password = document.getElementById('password');
let confirmation = document.getElementById('confirm_password');

setInterval(() => {
	if (password.value == confirmation.value) {
		password.classList.remove('error');
		confirmation.classList.remove('error');
	} else {
		password.classList.add('error');
		confirmation.classList.add('error');
	}
}, 1000);
