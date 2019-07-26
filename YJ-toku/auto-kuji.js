// ==UserScript==
// @name         YJ-toku, auto kuji
// @description  auto click kuji button
// @match        https://toku.yahoo.co.jp/*/lot*
// @version      1.0.1
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/YJ-toku/auto-kuji.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	// auto click
	const btn = $('#btnLot');
	if (btn) btn.click();

	// remove promo banner
	document.querySelector(".marginB20").style.zoom = '0.22'

})();
