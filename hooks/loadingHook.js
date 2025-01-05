import { renderGifts } from "../renderGifts/renderGifts.js";
import { giftModalPlugin } from "../giftModalPlugin/giftModalPlugin.js";

export const useLoading = (cardContainer, style, isHome) => {
	document.addEventListener("DOMContentLoaded", () => {
		fetch("./gifts.json")
			.then((response) => response.json())
			.then((gifts) => {
				renderGifts(gifts, cardContainer, style, isHome);
				const card = document.querySelectorAll(`.${style}-card`);
				giftModalPlugin(gifts, card);
			})
			.catch((error) => console.error("Error loading gifts:", error));
	});
};
