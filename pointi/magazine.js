// ==UserScript==
// @name         pointi, magazine, auto forward
// @icon         https://www.google.com/s2/favicons?domain=pointi.jp
// @description  auto click to the end
// @match        https://pointi.jp/contents/magazine/*
// @version      1.0.12
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/pointi/magazine.js
// @updateURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/pointi/magazine.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	// add open all
	if (document.getElementById("link_list")) {
		const action = async (event) => {

			// get URL list
			const articleUrls = Array.from(document.querySelectorAll("#link_list > li > a"))
				.filter(a => !a.querySelector(".list_stamp_img"))
				.map(a => a.href);

			// action on each URL
			const createOpenClosePromise = (url) => {
				return new Promise((resolve, reject) => {
					const childWindow = window.open(url, '_blank');
					childWindow.blur(); window.focus(); // stay on current page (not working)
					const checker = window.setInterval(() => {
						console.log('waiting: ', url);
						if (childWindow && childWindow.closed) {
							window.clearInterval(checker);
							window.clearInterval(timeout);
							console.log('closed: ', url);
							resolve();
						}
					}, 1333);
					const timeout = window.setTimeout(() => {
						window.clearInterval(checker);
						window.clearInterval(timeout);
						console.log('timeout: ', url);
						reject(new Error(`timeout: ${url}`));
					}, 30000);
				});
			};

			// open and close URL one by one
			for (const url of articleUrls) {
				await createOpenClosePromise(url);
			}

			console.log('DONE: will reload...');
			location.reload(true);
		};
		const button = document.createElement("button");
		button.innerHTML = "Open 1 by 1";
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
		return;
	}

	// auto forward
	function closeSelf(err) {
		if (err.message === "END") {
			console.log("✅");
			document.getElementById("outer").style.backgroundColor = "green";
			// close tab
			window.opener = self;
			setTimeout(window.close, 100);
		} else {
			console.error(err);
			document.getElementById("outer").style.backgroundColor = "red";
			// refresh tab to prevent error redirect
			setTimeout(() => { window.location.href = window.location.href; }, 100);
		}
	}
	async function next(pageOffset) {
		// document.querySelector('title + script + script')
		const searchParams = new URLSearchParams(window.location.search);
		const subID = searchParams.get("sub") || "ichioshi";
		const postID = searchParams.get("no");
		const name = searchParams.get("sub") ? "next" : parseInt(document.getElementsByClassName("current")[0].textContent) + pageOffset;
		const tokenURL = `/ajax_load/load_magazine_detail.php?sub=${subID}&no=${postID}&name=${name}&code=88818263152dct4qojnn40kksijt`;

		// get token
		await fetch(tokenURL, { "method": "GET" })
		.then(response => response.text())
		// get next page
		.then(token => {
			return fetch(window.location.href, {
				"redirect": 'follow', // prevent fail by 302
				"method": "POST",
				"body": `token=${token}`,
				"referrer": window.location.href,
				"referrerPolicy": "strict-origin-when-cross-origin",
				"mode": "cors",
				"credentials": "include",
				"headers": {
					"cache-control": "max-age=0",
					"content-type": "application/x-www-form-urlencoded",
				},
			});
		})
		.then(response => response.arrayBuffer())
		.then(buffer => {
			// decode japanese before text search
			const decoder = new TextDecoder("shift-jis");
			const text = decoder.decode(buffer);
			if (text.indexOf("stamp_box") !== -1) {
				throw new Error("END"); // for old specification
			}
			if (text.indexOf("スタンプは付与済みです") !== -1) {
				throw new Error("END");
			}

			setTimeout(next.bind(this, pageOffset + 1), 10); // recursion with delay
		})
		.catch((err) => {
			closeSelf(err);
		});
	}
	// auto forward main
	if (document.getElementsByClassName("detail_date").length !== 0) {
		// article page, start auto forward
		next(1);
	}
	if (document.body.innerText.indexOf("スタンプは付与済みです") !== -1) {
		// single page article
		closeSelf(new Error("END"));
	}

})();
