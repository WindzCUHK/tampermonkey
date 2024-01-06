// ==UserScript==
// @name         T-point, open all
// @description  add open all button
// @match        https://lot.tsite.jp/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/T-point/open-all.js
// @updateURL    https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/T-point/open-all.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tsite.jp
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	if (window.location.hash.startsWith("#/detail2")) {
		// auto kuji
		setTimeout(() => {
			document.querySelector(".btn-kuji > span")?.click();
			document.querySelector(".choose-item")?.click();
		}, 1000);
		return;
	}

	// open all in /#/top page
	const action = (event) => {
		Array.from(document.querySelectorAll(".btn-kuji:not(.btn-close)"))
			.forEach(btn => btn.click());
	};
	const button = document.createElement("button");
	button.innerHTML = "Open ALL";
	button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
	button.addEventListener("click", new DualClickEventListener(action));

	const body = document.body;
	body.appendChild(button);

})();
