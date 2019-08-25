// ==UserScript==
// @name         T-point, stop redirect
// @description  stop redirect to other pages
// @match        https://cpa1.tsite.jp/cpn/treasure/*/lottery
// @version      1.0.1
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/T-point/stop-redirect.js
// @grant        none
// @run-at       document-start
// ==/UserScript==

(function() {
	'use strict';

	window._setTimeout = window.setTimeout;
	window.setTimeout = (f, delay) => {
		if (f.toString().includes('location.href')) {
			return console.error('block', f, delay);
		}
		return window._setTimeout(f, delay);
	}

	/*
	$(window).bind('beforeunload', () => {
		console.log('redirect stopped~');
		return false;
	});
	window.addEventListener('beforeunload', (e) => {
		console.log('redirect stopped~');
		// Cancel the event
		e.preventDefault();
		// Chrome requires returnValue to be set
		e.returnValue = '';
		return false;
	});
	*/

})();
