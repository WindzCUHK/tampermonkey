// ==UserScript==
// @name         pointi, daily click, open all
// @icon         https://www.google.com/s2/favicons?domain=pointi.jp
// @description  add open all button
// @match        https://pointi.jp/daily.php
// @version      1.0.3
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/pointi/open-all.js
// @updateURL    https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/pointi/open-all.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const action = (event) => {
		Array.from(document.querySelectorAll('.click_btn_wrap div:not(.click_btn_off)'))
			.map(div => div.parentNode.href)
			.forEach(link => fetch(link));
	};
	const button = document.createElement("button");
	button.innerHTML = "Open ALL";
	button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
	button.addEventListener("click", new DualClickEventListener(action));

	// cmd + E => open all
	document.addEventListener('keydown', (e) => {
		if (e.metaKey && e.key === 'e') {
			button.click();
		}
	});

	const body = document.body;
	body.appendChild(button);

})();
