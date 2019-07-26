// ==UserScript==
// @name         YJ-toku, auto kuji
// @description  auto click kuji button
// @match        https://toku.yahoo.co.jp/*/lot*
// @version      1.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/YJ-toku/auto-kuji.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const btn = $('#btnLot');
	if (btn) btn.click();

})();
