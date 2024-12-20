// ==UserScript==
// @name         D-point, kuji open all
// @description  add open all button
// @match        https://dmarket.docomo.ne.jp/kuji/common/index.html*
// @version      1.0.3
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/D-point/kuji-open-all.js
// @updateURL    https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/D-point/kuji-open-all.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @grant        none
// ==/UserScript==

(function() {
	"use strict";

	// listen popup message
	window.addEventListener("message", (event) => {
		console.log("got:", event)
		if (event.data !== "lottery DONE") return;

		console.log("will close: ", event.origin);
		event.source.close();
	});

	const action = () => {
		Array.from(document.querySelectorAll("a.p-gf-serviceKuji-link"))
			.map(n => n.href)
			.forEach(url => {
				const w = window.open(url, "_blank", "popup=0");
				console.log("send message")
				w.postMessage("hi from main window!", '*');
			});
	};
	const button = document.createElement("button");
	button.innerHTML = "Open ALL";
	button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
	button.addEventListener("click", new DualClickEventListener(action));

	const body = document.body;
	body.appendChild(button);

})();
