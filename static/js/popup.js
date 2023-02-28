function isPopupVisible(name) {
	let element = document.getElementById(name);
	if (element) {
		return element.className.includes("popup-visible");
	} else {
		console.log("isPopupVisible: Non-existent element!")
		return false;
	}
}

function toggleClass(element, className) {
	if (element) {
		element.className = isPopupVisible(element.id) ? element.className.replace(" " + className, "") : element.className + " " + className;
		return element.className.includes(className);
	} else {
		console.log("toggleClass: Non-existent element!");
	}
}

function togglePopupClass(popup) {
	return toggleClass(popup, "popup-visible");
}
function toggleScroll() {
	return toggleClass(document.documentElement, "no-scroll");
}

function togglePopup(name) {
	if (name) {
		toggleScroll();
		togglePopupClass(document.getElementById(name))
	} else {
		console.log("showPopup: You need to provide a name!");
	}
}

var isPopupShot = false;
document.addEventListener('mouseout', e => {
    if (!e.toElement && !e.relatedTarget && !isPopupShot && !isPopupVisible('popup-newsletter')) {
	togglePopup("popup-newsletter");
	isPopupShot = true;
    }
});

