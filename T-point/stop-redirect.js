// ==UserScript==
// @name         T-point, stop redirect
// @description  stop redirect to other pages
// @match        https://cpa1.tsite.jp/cpn/treasure/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/T-point/stop-redirect.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	$(window).bind('beforeunload', () => {
		console.log('redirect stopped~');
		return false;
	});

})();
