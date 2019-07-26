// ==UserScript==
// @name         YJ-toku, open all
// @description  add open all button
// @match        https://toku.yahoo.co.jp/campaign
// @version      1.0.0
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
			.filter(link => !link.startsWith("https://rdsig.yahoo.co.jp/slotkuji/zubatop/RV=1/RU=a"))
			.filter(link => !link.startsWith("https://toku.yahoo.co.jp/mutb/entry/"))
			.forEach(link => window.open(link, '_blank'));
		// window.open("https://rims.tr.mufg.jp/?y=true", '_blank');
	};
	const button = document.createElement("button");
	button.innerHTML = "Open ALL";
	button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
	button.addEventListener("click", new DualClickEventListener(action));

	const body = document.body;
	body.appendChild(button);

})();
