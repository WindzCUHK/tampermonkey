// ==UserScript==
// @name         Facebook Group, sort post by time
// @description  add query parameter sorting_setting=CHRONOLOGICAL
// @match        https://www.facebook.com/groups/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/facebook/groups.js
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const urlParams = new URLSearchParams(window.location.search);
    const sorting = urlParams.get('sorting_setting');
    if (!sorting) {
        urlParams.set('sorting_setting', 'CHRONOLOGICAL');
        window.location.search = '?' + urlParams.toString();
    }

})();
