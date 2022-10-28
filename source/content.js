import optionsStorage from "./options-storage.js";

const BOARD_SELECTOR = ".notion-board-view";

const MODIFIED_CLASS = "_noard-modified";

function cardIdentifierSelector(icon) {
	return `.notion-collection-item img[src*="${icon}"]`;
}

function updateSubTasks(icon = "forward_") {
	[...document.querySelectorAll(cardIdentifierSelector(icon))]
		.map((e) => e.closest(`.notion-collection-item`))
		.filter(Boolean)
		.forEach((e) => e.classList.add(MODIFIED_CLASS));
}

async function init() {
	const options = await optionsStorage.getAll();
	chrome.runtime.onMessage.addListener(function (request) {
		// listen for messages sent from background.js
		if (request.message === "urlUpdated") {
			updateSubTasks(options.subTaskIcon);
		}
	});
}

init();
