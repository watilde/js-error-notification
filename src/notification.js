function notification() {
  var opt = {
    type : "basic",
    title: "JS Error Notification",
    message: 'foo',
    expandedMessage: 'bar',
    iconUrl: "/web_accessible_resources/white-64x64.png"
  };
  chrome.notifications.create('id0', opt, function () {});
}
