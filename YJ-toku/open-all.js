// ==UserScript==
// @name         YJ-toku, open all
// @description  add open all button
// @match        https://toku.yahoo.co.jp/campaign
// @version      1.0.2
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/YJ-toku/open-all.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	// YJ only
	if ($) $('li.cmpTab__possible').click();

	const action = (event) => {
		Array.from(document.querySelectorAll('ul.cmpList__possible li.cmpBox'))
			.map(li => li.querySelector('a'))
			.map(a => a.href)
			.filter(link => !link.startsWith("https://toku.yahoo.co.jp/mutb2/entry/"))
			.filter(link => !link.startsWith("https://t-mall.tsite.jp/c/p/toku_tpoint/"))
			.filter(link => !link.startsWith("https://toku-qr.yahoo.co.jp/botanist202006"))
			.filter(link => !link.startsWith("https://toku-qr.yahoo.co.jp/asahi202006"))
			.forEach(link => window.open(link, '_blank'));
		window.open("https://rims.tr.mufg.jp/?y=true", '_blank');
	};

	// video textarea
	const textarea = document.createElement("textarea");
	textarea.style.cssText = "position:fixed;bottom:0;left:0;width:80%;height:50px;z-index:999;margin:auto;bottom:0;right:0;background-color:pink;font-size:small;";
	// button.addEventListener("click", new DualClickEventListener(action));
	textarea.value = localStorage.getItem('gyao_urls');

	// open all button
	const button = document.createElement("button");
	button.innerHTML = "Open ALL";
	button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
	button.addEventListener("click", new DualClickEventListener(action));
	button.addEventListener("click", (e) => {
		// format: newline separated list
		textarea.value
			.split('\n')
			.filter(l => l.length > 0)
			.forEach(link => window.open(link.trim(), '_blank'));

		localStorage.setItem('gyao_urls', textarea.value);
	});

	const body = document.body;
	body.appendChild(button);
	body.appendChild(textarea);

})();
