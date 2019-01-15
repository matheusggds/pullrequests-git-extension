chrome.runtime.onMessage.addListener(function (msg, sender) {
	console.log(JSON.parse(msg).text);

	chrome.browserAction.setBadgeText({
		text: JSON.parse(msg).text
	})

	chrome.browserAction.setBadgeBackgroundColor({
		color: JSON.parse(msg).color
	});

});

