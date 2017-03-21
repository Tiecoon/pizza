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
//document.body.innerHTML = document.body.innerHTML.replace(/Piazza/g, "Pizza");

//returns url for background image in appropriate format
function convurl(dir){
	var test = "url('";
	return test.concat(chrome.runtime.getURL(dir), "')");
}

document.getElementById("classes_brand").style.backgroundImage = convurl("img/piazza_classes_logo_white_new.png");

walk(document.body);

function walk(node)
{
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;



	switch ( node.nodeType )
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child )
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)
{
	var v = textNode.nodeValue;

	v = v.replace(/\bPiazza\b/g, "Pizza");
	v = v.replace(/\bpiazza\b/g, "Pizza");

	textNode.nodeValue = v;
}

var y = document.getElementsByTagName("span");
var i;
for (i = 0; i < y.length; i++) {
    y[i].innerhtml = y[i].innerHTML.replace(/Piazza/g, "Pizza");
    y[i].innerhtml = y[i].innerHTML.replace(/piazza/g, "pizza");
}
