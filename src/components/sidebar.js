export default function () {
	const sidebar = document.createElement('div')
	sidebar.classList.add('sidebar')
	sidebar.innerHTML = `\
	<div class="dark-bg flex">
		<span class="flex">
			<img id="logo" src="/src/assets/img/odin-lined.png" alt="Odin Logo" />
			<h1>Odin</h1>
		</span>
	</div>
	`

	return sidebar
}