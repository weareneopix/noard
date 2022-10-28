// eslint-disable-next-line import/no-unassigned-import
import "./options-storage.js";

chrome.tabs.onUpdated.addListener((id, change) => {
	chrome.tabs.sendMessage(id, {
		message: "urlUpdated",
		url: change.url,
	});
});
