function setPopupClass(popup, show) {
	if (popup) {
		if (show != popup.className.includes("popup-visible")) {
				popup.className = (show ? popup.className + " " + "popup-visible" : popup.className.replace(" popup-visible", ""));
		} else {
			console.log("setPopupclass: Will not add/remove class twice!")
		}
	} else {
		console.log("setPopupclass: Non-existent popup!")
	}
}
function showPopup(name) {
	if (name) {
		setPopupClass(document.getElementById(name), true);
	} else {
		console.log("showPopup: You need to provide a name!");
	}
}
function hidePopup(name) {
	if (name) {
		setPopupClass(document.getElementById(name), false);
	} else {
		console.log("showPopup: You need to provide a name!");
	}
}
