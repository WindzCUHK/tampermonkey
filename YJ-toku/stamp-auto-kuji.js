// ==UserScript==
// @name         YJ, stamp auto kuji
// @icon         https://s.yimg.jp/c/icon/s/bsc/2.0/favicon.ico
// @description  auto click kuji button
// @match        https://stamp.yahoo.co.jp/stamp/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/YJ-toku/stamp-auto-kuji.js
// @updateURL    https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/YJ-toku/stamp-auto-kuji.js
// @grant        none
// ==/UserScript==

(function() {
	"use strict";

	const checkExist = setInterval(() => {
		const img = document.querySelector('#modal div.buttonBlock > .button');

		if (img) {
			// auto kuji
			img.click();
			clearInterval(checkExist);
		}
	}, 500);

})();
