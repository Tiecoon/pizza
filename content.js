function change_favicon(img) {
	var favicon = document.querySelector('link[rel="shortcut icon"]');

	if (!favicon) {
		favicon = document.createElement('link');
		favicon.setAttribute('rel', 'shortcut icon');
		var head = document.querySelector('head');
		head.appendChild(favicon);
	}


	favicon.setAttribute('type', 'image/png');
	favicon.setAttribute('href', img);
}

change_favicon(chrome.runtime.getURL("/favicon/favicon-32x32.png"));

//"find and replace" only for body probably safer
document.body.innerHTML = document.body.innerHTML.replace(/Piazza/g, "Pizza");

//returns url for background image in appropriate format
function convurl(dir){
	var test = "url('";
	return test.concat(chrome.runtime.getURL(dir), "')");
}

document.getElementById("classes_brand").style.backgroundImage = convurl("img/piazza_classes_logo_white_new.png");
