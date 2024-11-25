// ==UserScript==
// @name         SAISON game
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ib-game.jp
// @description  auto click kuji button
// @match        https://a-q-f.ib-game.jp/gacha/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/SAISON/auto-kuji.js
// @updateURL    https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/SAISON/auto-kuji.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  document.querySelector(".btn_set").firstElementChild.click();
})();
