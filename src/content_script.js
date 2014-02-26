(function () {
  'use strict';
  var scp = document.createElement('script');
  scp.src = chrome.extension.getURL('/src/web_accessible_resources.js');
  document.body.appendChild(scp);
  scp.addEventListener('load', function () {
    postMessage({
      type: 'getObject',
    }, location.href);
  });
  addEventListener('message', function (evn) {
    if (evn.data.type === 'getObject') return;
    if (evn.source !== window) return;
    chrome.runtime.sendMessage({opt: evn.data}, function(){});
  });
}());
