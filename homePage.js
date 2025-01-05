import { burgerModalPlugin } from "./burgerModalPlugin/burgerModalPlugin.js";
import { sliderPlugin } from "./sliderPlugin/sliderPlugin.js";
import { countdownTimerPlugin } from "./timerPlugin/timerPlugin.js";
import { useLoading } from "./hooks/loadingHook.js";

const cardContainer = document.querySelector(".best-card-container");

useLoading(cardContainer, "best", true);
burgerModalPlugin();
sliderPlugin(0);
countdownTimerPlugin();
