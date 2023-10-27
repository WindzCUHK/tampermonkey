// ==UserScript==
// @name         auto skip ads
// @icon         https://www.google.com/s2/favicons?domain=youtube.com
// @description  auto click to skip ads button
// @match        https://www.youtube.com/*
// @version      1.0.2
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/youtube/auto-ads.js
// @updateURL    https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/youtube/auto-ads.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;
function waitForElementToExist(selector) {
  return new Promise(resolve => {
    if (document.querySelector(selector)) {
      return resolve(document.querySelector(selector));
    }

    const observer = new MutationObserver(() => {
      if (document.querySelector(selector)) {
        resolve(document.querySelector(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      subtree: true,
      childList: true,
    });
  });
}

const main = async function() {
  const ads = await waitForElementToExist('div.video-ads');
  console.log('Will auto skip ads under element:', ads);

  // skip ads
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
}
main();

})();
