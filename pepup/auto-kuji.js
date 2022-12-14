// ==UserScript==
// @name         pepup, auto kuji
// @icon         https://pepup.life/favicon.ico
// @description  auto click kuji button
// @match        https://pepup.life/campaign/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/pepup/auto-kuji.js
// @updateURL    https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/pepup/auto-kuji.js
// @grant        none
// ==/UserScript==

(function() {
	"use strict";

	const checkExist = setInterval(() => {
		const img = document.querySelector(".pep-walk .lotto .button-round.red");

		if (img) {
			// auto kuji
			img.click();
			clearInterval(checkExist);
		}
	}, 500);

})();
