// ==UserScript==
// @name Fix for #NewTwitter: Scrolling the Details Pane
// @author Vasil Dinkov
// @namespace http://vadikom.com/dailies/fix-for-new-twitter-scrolling-of-the-details-pane/
// @version 1.0
// @description Prevents the whole page from scrolling when scrolling the details pane with the mouse wheel
// @include http://twitter.com/*
// ==/UserScript==

window.addEventListener('load', function() {
	// so idiotic approach due to Chrome's lack of support for unsafeWindow
	location.href = "javascript:$('#page-container div.pane-components').live('mousewheel DOMMouseScroll', function(e) {\
		var scrollTop = this.scrollTop,\
			clientHeight = this.clientHeight,\
			scrollHeight = this.scrollHeight,\
			originalEvent = e.originalEvent,\
			scrollingUp = (originalEvent.wheelDelta || -originalEvent.detail) > 0;\
		if (scrollingUp && scrollTop == 0 || !scrollingUp && scrollTop + clientHeight == scrollHeight)\
			e.preventDefault();\
	});void(0)";
}, false);