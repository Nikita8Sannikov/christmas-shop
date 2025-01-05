import { topButtonPlugin } from "./topButtonPlugin/topButtonPlugin.js";
import { burgerModalPlugin } from "./burgerModalPlugin/burgerModalPlugin.js";
import { useLoading } from "./hooks/loadingHook.js";
import { tabsPlugin } from "./tabsPlugin/tabsPlugin.js";

const cardContainer = document.querySelector(".gift-card-container");

useLoading(cardContainer, "gift");
topButtonPlugin();
burgerModalPlugin();
tabsPlugin();
