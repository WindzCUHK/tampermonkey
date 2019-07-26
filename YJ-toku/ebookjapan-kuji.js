// ==UserScript==
// @name         YJ-toku, ebookjapan kuji
// @description  auto click, and close
// @match        https://ebookjapan.yahoo.co.jp/special/zubatoku/mangakuji/*
// @version      1.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/YJ-toku/ebookjapan-kuji.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	Array.from(document.querySelectorAll(".gotoBtn > a"))
		.map(a => a.href)
		.forEach(link => window.open(link, '_blank'));
	window.close();

})();
