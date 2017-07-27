function disable_button() {
	let buttons = document.getElementsByTagName("li");

	for (i = 0; i < buttons.length; i++) {
		let button = buttons[i];

		button.onclick = function() {
			this.disabled = true;
			this.classList.add("copied");
		}
	}
}

// Run scripts when window is loaded
window.onload = function() {
	new Clipboard(".copy");
	disable_button();
}
