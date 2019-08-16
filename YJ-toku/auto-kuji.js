// ==UserScript==
// @name         YJ-toku, auto kuji
// @description  auto click kuji button
// @match        https://toku.yahoo.co.jp/*/lot*
// @version      1.0.3
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/YJ-toku/auto-kuji.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	// auto click
	const input = $('.btnActionKeyword__inputText');
	if (!input) {
		// prevent refresh for keyword input
		const btn = $('#btnLot');
		if (btn) btn.click();
	}

	// remove promo banner
	const banner = document.querySelector(".textCenter.pcBox > .marginB20");
	if (banner) banner.style.zoom = '0.22';

})();
