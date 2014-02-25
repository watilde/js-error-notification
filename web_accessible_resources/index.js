(function() {
  'use strict';
  var count = 0;
  var notify_error = function (message, url, line) {
    var expandedMessage = '', opt = {};
    expandedMessage = 'message: ' + message + '\n';
    expandedMessage += 'url: ' + url + '\n';
    expandedMessage += 'line: ' + line;
    opt = {
      type : "basic",
      title: "JS Error Notification",
      message: message,
      expandedMessage: expandedMessage,
      iconUrl: "/web_accessible_resources/white-64x64.png"
    };
    // chrome.notifications.create('id' + count, opt, function () { count++; });
    return false;
  };
  window.onerror = notify_error;
  addEventListener('message', function (evn) {
    if (evn.source != window) return;
    if (evn.data.type !== 'getObject') return;
    postMessage(document[evn.data.key], location.href);
  });
}());
