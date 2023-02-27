function toggleClass(element, className) {
	if (element) {
		element.className = (element.className.includes(className) ? element.className.replace(" " + className, "") : element.className + " " + className);
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
		toggleScroll(togglePopupClass(document.getElementById(name)));
	} else {
		console.log("showPopup: You need to provide a name!");
	}
}

// FIXME: doesn't trigger
document.addEventListener('mouseleave', function() { console.log("left"); });
