(function() {
  'use strict';
  var count = 0, DOMReady = false;
  window.onload = function () {
    DOMReady = true;
  }
  window.onerror = function (message, url, line) {
    notify_error(message, url, line);
    return false;
  };

  function notify_error (message, url, line) {
    var expandedMessage = '', opt = {};
    expandedMessage = 'message: ' + message + '\n';
    expandedMessage += 'url: ' + url + '\n';
    expandedMessage += 'line: ' + line + '\n';
    expandedMessage += 'DOMReady: ' + DOMReady;
    opt = {
      type : "basic",
      title: "JS Error Notification",
      message: message,
      expandedMessage: expandedMessage,
      iconUrl: "images/white-64x64.png"
    }
    chrome.notifications.create(count, opt, function () { count++; });
  }
}());
