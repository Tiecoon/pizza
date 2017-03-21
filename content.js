// Handles favicon and work replacement

// change the favicon
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

// replace all text
walk(document);

// add listener to triggers body text replacement when the DOM changes
document.addEventListener('DOMNodeInserted', nodeInsertedCallback);
function nodeInsertedCallback(event){
	walk(document.body);
}

// Scans the Document
function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E

	var child, next;

	switch (node.nodeType) {
		case 1: // Element
		case 9: // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
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

// Replaces Piazza Text
function handleText(textNode) {
	var v = textNode.nodeValue;

	v = v.replace(/\bPiazza\b/g, "Pizza");
	v = v.replace(/\bpiazza\b/g, "Pizza");

	textNode.nodeValue = v;
}