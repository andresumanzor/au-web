$( document ).ready(function() {
    document.querySelector('#button-github').addEventListener('click', () => {
	    window.open("https://github.com/", "");
	});

	document.querySelector('#button-email').addEventListener('click', () => {
	    window.location.href = "mailto:andres.umanzor@hotmail.com?Subject=Website%20Contact";
	});
});
