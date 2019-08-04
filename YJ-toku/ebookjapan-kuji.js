// ==UserScript==
// @name         YJ-toku, ebookjapan kuji
// @description  auto click, and close
// @match        https://ebookjapan.yahoo.co.jp/special/zubatoku/mangakuji/*
// @version      1.0.1
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/YJ-toku/ebookjapan-kuji.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const checkExist = setInterval(() => {
		const links = Array.from(document.querySelectorAll(".gotoBtn > a"));
		if (links.length >= 2) {
			links.map(a => a.href)
				.forEach(link => window.open(link, '_blank'));
			window.close();
			clearInterval(checkExist);
		}
	}, 500);

})();
