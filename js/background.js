chrome.browserAction.onClicked.addListener(function(tab) {
 chrome.windows.create({url: "chrome://sys-internals/#CPU",
       width: 430, height: 350,
       type:  "popup" });
});
