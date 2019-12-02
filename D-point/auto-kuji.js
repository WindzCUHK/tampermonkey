// ==UserScript==
// @name         D-point, auto kuji
// @description  auto click kuji button
// @match        https://kuji.d.dmkt-sp.jp/kuji/*
// @version      1.0.1
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/D-point/auto-kuji.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const checkExist = setInterval(() => {
		const img = document.querySelector('.lotteryArea img');
		if (window.location.pathname !== "/kuji/ErT7HDcs") {
			// auto kuji
			img.click();
		} else {
			// re-layout
			document.getElementById('complete-lotteries').style.cssText = 'top: 500px; position: absolute; width: 100%; background: white; zoom: 0.5;';
			document.getElementById('floating-banner').style.display = 'none';
			document.getElementById('sample').style.display = 'none';
		}
		if (img) clearInterval(checkExist);
	}, 500);

})();
