// ==UserScript==
// @icon         https://www.google.com/s2/favicons?domain=pointi.jp
// @name         auto skip ads
// @description  auto click to skip ads button
// @match        https://www.youtube.com/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/youtube/auto-ads.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
const ads = document.getElementsByClassName("video-ads")[0];

const observer = new MutationObserver((mutations) => {
	mutations.forEach((mutation) => {
		if (mutation.type === 'childList') {
			console.log(mutation)

			// skip ads
            if (document.getElementsByClassName("ytp-ad-skip-button").length) {
                document.getElementsByClassName("ytp-ad-skip-button")[0].click()
            }
            if (document.getElementsByClassName("ytp-ad-overlay-close-button").length) {
                document.getElementsByClassName("ytp-ad-overlay-close-button")[0].click()
            }
		}
	});
});
observer.observe(ads, {
	subtree: true,
	childList: true,
});

})();
