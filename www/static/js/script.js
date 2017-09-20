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

function toggle_info() {
	let info = document.getElementById("info-panel");
	if (info.style.display === "none") {
		info.style.display = "block";
	} else {
		info.style.display = "none";
	}
}

// Run scripts when window is loaded
window.onload = function() {
	new Clipboard(".copy");
	disable_button();
}
