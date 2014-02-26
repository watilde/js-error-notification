(function () {
  'use strict';
  var count = 0;
  chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      chrome.notifications.create('id' + count,  {
        type : "basic",
        title: request.opt.message,
        message: request.opt.expandedMessage,
        iconUrl: "/web_accessible_resources/white-64x64.png"
      }, function () { count++; });
    }
    );
}());
