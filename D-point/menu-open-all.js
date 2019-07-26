// ==UserScript==
// @name         D-point, menu open all
// @description  add open all button
// @match        https://dpoint.jp/ctrw/web3/dpointclubland/index.html*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/D-point/menu-open-all.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @grant        none
// ==/UserScript==

(function() {
	'use strict';

	const action = () => {
		Array.from(document.querySelectorAll('ul.bn_wrap_000 > li'))
			.map(li => li.querySelector('a'))
			.map(a => a.href)
			.filter(link => !link.includes("#premium-pop"))
			.filter(link => !link.startsWith("https://hiroba.dpoint.jp/game"))
			.filter(link => !link.startsWith("https://hiroba.dpoint.jp/?"))
			.filter(link => !link.startsWith("http://rewardplatform.jp/"))
			.filter(link => !link.startsWith("https://www.dcm-b.jp/"))
			.filter(link => !link.startsWith("https://gp.dmkt-sp.jp/"))
			.filter(link => !link.startsWith("https://d.dmkt-sp.jp/zukan/start/index.html"))
			.filter(link => !link.startsWith("https://d.dmkt-sp.jp/kuji/common/go_to_kuji_page.html"))
			.filter(link => !link.startsWith("https://dpoint.jp/ctrw/web3/largeamount/"))
			.filter(link => !link.startsWith("https://dpoint.jp/ctrw/exp/dpcfelica/index.html"))
			.filter(link => !link.startsWith("https://dpoint.jp/ctrw/web/coupon"))
			.filter(link => !link.startsWith("https://d.dmkt-sp.jp/sugoroku/"))
			.filter(link => !link.startsWith("https://dpoint.jp/ctrw/cp3/bathclin/"))
			.filter(link => !link.startsWith("https://dpoint.jp/ctrw/cp3/euglena/"))
			.forEach(link => window.open(link, '_blank'));

		window.open("https://d.dmkt-sp.jp/kuji/common/index.html", '_blank');
		window.open("https://d.dmkt-sp.jp/sugoroku/start/index.html", '_blank');
	};
	const button = document.createElement("button");
	button.innerHTML = "Open ALL";
	button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
	button.addEventListener("click", new DualClickEventListener(action));

	const body = document.body;
	body.appendChild(button);

})();
