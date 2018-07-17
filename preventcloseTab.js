window.onbeforeunload = function (e) {
	var message = 'Are you sure you want to leave this page?';
	if (typeof e == 'undefined') {
		e = window.event;
	}
	if (e) {
		e.returnValue = message;
	}
	return message;
}
