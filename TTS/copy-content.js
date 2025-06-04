// ==UserScript==
// @name         台灣小說網手機閱讀, copy content
// @description  add copy content button
// @match        https://m.xsw.tw/*
// @version      1.0.0
// @namespace    https://github.com/WindzCUHK/tampermonkey
// @author       Windz
// @downloadURL  https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/TTS/copy-content.js
// @updateURL    https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/TTS/copy-content.js
// @require      https://raw.githubusercontent.com/WindzCUHK/tampermonkey/master/_require/DualClickEventListener.js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ttsassociates.com.au
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  // check page
  const contentElement = document.querySelector('div.mm-content');
  if (!contentElement) {
    return;
  }

  // event handler
  const action = (event) => {
    const targetTitle = document.querySelector('#nr_title').textContent.trim() + '\n\n';

    const targetContent = contentElement.textContent
      .replaceAll(/[';~.\s\n]/g,'')
      .replaceAll('.','。')
      .replaceAll('·','・')
      .replaceAll(/[“【『[]/g,'「')
      .replaceAll(/[”】』\]]/g,'」')
      .replaceAll('求些月票。','')
      .replace(/>>章節報錯<<.+$/g,'');

    navigator.clipboard.writeText(targetTitle + targetContent);
  };

  // add copy content button
  const button = document.createElement("button");
  button.innerHTML = "Copy Content";
  button.style.cssText = "position:fixed;top:80%;left:0;width:80%;height:100px;z-index:999;margin:auto;bottom:0;right:0;background-color:red;font-size:xx-large;";
  button.addEventListener("click", new DualClickEventListener(action));
  document.body.appendChild(button);

})();
