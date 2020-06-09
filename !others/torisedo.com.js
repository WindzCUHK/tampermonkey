// ==UserScript==
// @name         torisedo.com
// @description  enhance UI
// @match        https://torisedo.com/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/!others/torisedo.com.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const s = document.getElementById('trust-form').style;
	if (s) {
		s.backgroundColor = 'pink';
		s.position = 'fixed';
		s.top = '0';
		s.left = '0';
		s.zIndex = '999';
		return;
	}

	const b = document.querySelector('#confirm-button > input[type=submit]:nth-child(2)');
	if (b) {
		b.click();
		return;
	}

	const msg = document.getElementById('message-container-confirm');
	if (msg) {
		window.open("https://torisedo.com/rakuraku");
		return;
	}
})();
