// ==UserScript==
// @name         T-point, open all
// @description  add open all button
// @match        https://appapi.net/cpmtm/public/*
// @version      1.0.1
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/T-point/open-all.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const action = (event) => {
		Array.from(document.querySelectorAll('div.playcnt'))
			.filter(ele => ele.textContent.length > 0)
			.map(ele => ele.parentNode.parentNode.querySelector("div.item_img > a"))
			.map(a => a.href.split('?')[0] + 'lottery')
			.forEach(link => window.open(link, '_blank'));
	};
	const button = document.createElement("button");
	button.innerHTML = "Open ALL";
	button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
	button.addEventListener("click", new DualClickEventListener(action));

	const body = document.body;
	body.appendChild(button);

})();
