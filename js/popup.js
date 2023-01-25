function setPopupClass(popup, show) {
	if (popup) {
		if (show != popup.className.includes("popup-visible")) {
				popup.className = (show ? popup.className + " " + "popup-visible" : popup.className.replace(" popup-visible", ""));
		}
	}
}
function showPopup(name) {
	if (name) {
		setPopupClass(document.getElementById(name), true);
	}
}
function hidePopup(name) {
	if (name) {
		setPopupClass(document.getElementById(name), false);
	}
}
