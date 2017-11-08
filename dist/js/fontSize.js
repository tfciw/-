var html = document.getElementsByTagName('html')[0],
	isFirefox,
	width = document.documentElement.clientWidth,
	height = document.documentElement.clientHeight,
	GetFirefox = navigator.userAgent.indexOf("Firefox");
html.style.fontSize = width / 20 + 'px';
if (isFirefox = GetFirefox > 0) {
	html.style.fontSize = width / 60 + 'px';
}
if (window.orientation == 90 || window.orientation == -90) {
	html.style.fontSize = height / 20 + 'px';
	if (isFirefox = GetFirefox > 0) {
		html.style.fontSize = height / 60 + 'px';
	}
}
