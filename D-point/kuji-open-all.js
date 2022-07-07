// ==UserScript==
// @name         D-point, menu open all
// @description  add open all button
// @match        https://dmarket.docomo.ne.jp/kuji/common/index.html*
// @version      1.0.1
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/D-point/kuji-open-all.js
// @updateURL    https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/D-point/kuji-open-all.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const action = () => {
		Array.from(document.querySelectorAll("#complete-lotteries li:not(.played) > a"))
			.map(n => n.href)
			.forEach(window.open);
	};
	const button = document.createElement("button");
	button.innerHTML = "Open ALL";
	button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
	button.addEventListener("click", new DualClickEventListener(action));

	const body = document.body;
	body.appendChild(button);

})();
