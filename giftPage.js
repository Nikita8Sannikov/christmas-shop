import { giftModalPlugin } from "./giftModalPlugin/giftModalPlugin.js";
import { topButtonPlugin } from "./topButtonPlugin/topButtonPlugin.js";
import { burgerModalPlugin } from "./burgerModalPlugin/burgerModalPlugin.js";
import { renderGifts } from "./renderGifts/renderGifts.js";

const cardContainer = document.querySelector(".gift-card-container");

document.addEventListener("DOMContentLoaded", () => {
	fetch("./gifts.json")
		.then((response) => response.json())
		.then((gifts) => {
			renderGifts(gifts, cardContainer, "gift");
			const giftCard = document.querySelectorAll(".gift-card");
			console.log(giftCard);
			giftModalPlugin(gifts, giftCard);
		})
		.catch((error) => console.error("Error loading gifts:", error));
});
// modalPlugin(cardContainer);
// renderGifts(gifts, cardContainer, "gift");
topButtonPlugin();
burgerModalPlugin();
