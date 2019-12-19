// ==UserScript==
// @name         D-point, menu open all
// @description  add open all button
// @match        https://dpoint.jp/content/land/index.html
// @version      1.0.6
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
			.filter(link => !link.startsWith("https://hiroba.dpoint.jp/?"))
			.filter(link => !link.startsWith("https://hiroba.dpoint.jp/game"))
			.filter(link => !link.startsWith("https://hiroba.dpoint.jp/kuji/garagara"))
			.filter(link => !link.startsWith("https://hiroba.dpoint.jp/sugotoku/about"))
			.filter(link => !link.startsWith("https://www.smbcnikko.co.jp/products/inv/toshin_lab/index.html"))
			.filter(link => !link.startsWith("https://www.dcm-b.jp/"))
			.filter(link => !link.startsWith("https://gp.dmkt-sp.jp/"))
			.filter(link => !link.startsWith("https://gourmet.dmkt-sp.jp/gourmet/contents/login/campaign/webpromo"))
			// https://service.smt.docomo.ne.jp/portal/promotion/src/mymagazine_cp1_19_Tw01.html
			.filter(link => !link.startsWith("https://go.onelink.me/UuOX/3be803bf"))
			.filter(link => !link.startsWith("https://d.dmkt-sp.jp/kuji/common/go_to_kuji_page.html"))
			.filter(link => !link.startsWith("https://d.dmkt-sp.jp/zukan/point_cp_yamawake/index.html"))
			.filter(link => !link.startsWith("https://d.dmkt-sp.jp/common/mypage_mytoku/index.html"))
			.filter(link => !link.startsWith("https://dpoint.jp/content/largeamount/index.html"))
			.filter(link => !link.startsWith("https://dpoint.jp/ctrw/exp/dpcfelica/index.html"))
			.filter(link => !link.startsWith("https://dpoint.jp/ctrw/town/machiq/index.html"))
			.filter(link => !link.startsWith("https://dpoint.jp/ctrw/web/coupon/platinum_coup.html"))
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

	// move login kuji
	document.getElementById('land_gca_03').style = 'position: fixed;bottom: 150px;z-index: 9999;box-shadow: 0px 0px 5px 30px gray;/* height: 400px; */left: 50px;overflow: hidden;/* border: 10px yellow solid; */width: 272px;height: 216px;'

})();
