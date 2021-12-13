// ==UserScript==
// @icon         https://www.google.com/s2/favicons?domain=pointi.jp
// @name         pointi, magazine, auto forward
// @description  auto click to the end
// @match        https://pointi.jp/contents/magazine/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/pointi/open-all.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	// add open all
	if (document.getElementById("link_list")) {
		const action = (event) => {
			Array.from(document.querySelectorAll("#link_list > li > a"))
				.map(a => a.href)
				.forEach(link => window.open(link, '_blank'));
		};
		const button = document.createElement("button");
		button.innerHTML = "Open ALL";
		button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
		button.addEventListener("click", new DualClickEventListener(action));
	
		const body = document.body;
		body.appendChild(button);
		return;
	}

	// auto forward
	function extractValue(text) {
		if (text.search("stamp_box") !== -1) {
			throw new Error("END");
		}

		const target = "movePage('";
		const startIdx = text.indexOf(target, 0);

		if (startIdx < 0) {
			throw new Error("no target");
		}
		const endIdx = text.indexOf("='", startIdx);
		return text.substring(startIdx + target.length, endIdx);
	}
	let nextValue;
	async function next(value) {
		await fetch(window.location.href, {
			"headers": {
				"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
				"accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7,ja;q=0.6",
				"cache-control": "max-age=0",
				"content-type": "application/x-www-form-urlencoded",
				"sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"96\", \"Google Chrome\";v=\"96\"",
				"sec-ch-ua-mobile": "?0",
				"sec-ch-ua-platform": "\"macOS\"",
				"sec-fetch-dest": "document",
				"sec-fetch-mode": "navigate",
				"sec-fetch-site": "same-origin",
				"sec-fetch-user": "?1",
				"upgrade-insecure-requests": "1"
			},
			"referrer": window.location.href,
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": `a=${encodeURIComponent(value)}%3D`,
			"method": "POST",
			"mode": "cors",
			"credentials": "include"
		})
		.then(response => response.text())
		.then((text) => {
			nextValue = extractValue(text);
			console.log("value: ", nextValue);
			next(nextValue);
		})
		.catch((err) => {
			if (err.message === "END") {
				console.log("✅");
				document.getElementById("outer").style.backgroundColor = "green";
			} else {
				console.error(err);
				// refresh tab to prevent error redirect
				window.location.href = window.location.href;
			}
			window.opener = self;
			window.close();
		})
	}
	const movePage = document.getElementById("move_page");
	if (movePage) {
		next(extractValue(movePage.parentNode.innerHTML));
	}

})();