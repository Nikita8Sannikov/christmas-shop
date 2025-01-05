import { giftModalPlugin } from "./giftModalPlugin/giftModalPlugin.js";
// import { topButtonPlugin } from "./topButton/topButton.js";
import { burgerModalPlugin } from "./burgerModalPlugin/burgerModalPlugin.js";
import { renderGifts } from "./renderGifts/renderGifts.js";
import { sliderPlugin } from "./sliderPlugin/sliderPlugin.js";
import { countdownTimerPlugin } from "./timerPlugin/timerPlugin.js";

const cardContainer = document.querySelector(".best-card-container");

document.addEventListener("DOMContentLoaded", () => {
	fetch("./gifts.json")
		.then((response) => response.json())
		.then((gifts) => {
			renderGifts(gifts, cardContainer, "best", true);
			const bestCard = document.querySelectorAll(".best-card");
			console.log(bestCard);
			giftModalPlugin(gifts, bestCard);
		})
		.catch((error) => console.error("Error loading gifts:", error));
});
// modalPlugin(cardContainer);
// renderGifts(gifts, cardContainer, "gift");
// topButtonPlugin();
burgerModalPlugin();
sliderPlugin(0);
countdownTimerPlugin();
