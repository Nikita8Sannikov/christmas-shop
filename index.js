const burgerIcon = document.querySelector(".burger");
const burgerLinks = document.querySelectorAll(".burger-modal a");
const burgerModal = document.querySelector(".burger-modal");
const burgerModalList = document.querySelector(".burger-modal ul");
const body = document.body;

const arrowButtonLeft = document.querySelector(".arrow-button.left");
const arrowButtonRight = document.querySelector(".arrow-button.right");
const sliderContainer = document.querySelector(".slider-container");

// бургер модалка
burgerIcon.addEventListener("click", () => {
	burgerIcon.classList.toggle("active");
	if (burgerIcon.classList.contains("active")) {
		burgerIcon.classList.remove("inActive");
		body.classList.add("no-scroll");
		burgerModalList.style.visibility = "visible";
		burgerModal.style.visibility = "visible";
		burgerModal.classList.add("active");
		burgerModalList.classList.add("active");
	}

	if (!burgerIcon.classList.contains("active")) {
		body.classList.remove("no-scroll");
		burgerModalList.classList.remove("active");
		burgerModal.classList.remove("active");
		burgerIcon.classList.add("inActive");
	}
});

burgerLinks.forEach((link) => {
	link.addEventListener("click", () => {
		body.classList.remove("no-scroll");
		burgerIcon.classList.remove("active");
		burgerModalList.style.visibility = "hidden";
		burgerModal.style.visibility = "hidden";
		burgerModalList.classList.remove("active");
		burgerModal.classList.remove("active");
		burgerIcon.classList.add("inActive");
	});
});

// СЛАЙДЕР
const sliderPlugin = (currentPosition = 0) => {
	let numberOfClicks;
	let movePx;

	const updateSliderInfo = () => {
		let visibleArea = sliderContainer.clientWidth;
		let totalSliderWidth = sliderContainer.scrollWidth;

		if (window.innerWidth >= 769) {
			// console.log("window.innerWidth", window.innerWidth);
			numberOfClicks = 3;
		} else if (window.innerWidth >= 380 && window.innerWidth < 769) {
			// console.log("window.innerWidth", window.innerWidth);
			numberOfClicks = 6;
		}

		movePx = (totalSliderWidth - visibleArea) / numberOfClicks;

		updateButtonsState();
		// console.log(" totalSliderWidth", totalSliderWidth);
		// console.log(" visibleArea", visibleArea);
		// console.log(" movePx ", movePx);
	};

	const updateButtonsState = () => {
		arrowButtonLeft.disabled = currentPosition <= 0;
		arrowButtonRight.disabled = currentPosition === numberOfClicks;
	};

	const changeSlide = (direction) => {
		if (direction === "right" && currentPosition < numberOfClicks) {
			currentPosition++;
			sliderContainer.scrollLeft = currentPosition * movePx;
			updateSliderInfo();
		}

		if (direction === "left" && currentPosition > 0) {
			currentPosition--;
			sliderContainer.scrollLeft = currentPosition * movePx;
			updateSliderInfo();
		}

		updateButtonsState();
	};

	arrowButtonRight.addEventListener("click", () => {
		changeSlide("right");
	});

	arrowButtonLeft.addEventListener("click", () => {
		changeSlide("left");
	});

	window.addEventListener("resize", () => {
		updateSliderInfo();
		currentPosition = 0;
		sliderContainer.scrollLeft = 0;
	});
	updateSliderInfo();
};

sliderPlugin(0);

// ТАЙМЕР
const countdownTimerPlugin = () => {
	function getDiff() {
		const targetDate = new Date("2025-01-01T00:00:00Z").getTime();
		const now = new Date().getTime();
		return (difference = targetDate - now) / 1000 / 60 / 60 / 24;
	}

	const daysEl = document.querySelector(".days h3");
	const hoursEl = document.querySelector(".hours h3");
	const minutesEl = document.querySelector(".minutes h3");
	const secondsEl = document.querySelector(".seconds h3");

	const updateTimer = () => {
		const difference = getDiff();

		if (difference > 0) {
			const days = Math.floor(difference);
			const hours = Math.floor((difference - days) * 24);
			const minutes = Math.floor(((difference - days) * 24 - hours) * 60);
			const seconds = Math.floor(
				(((difference - days) * 24 - hours) * 60 - minutes) * 60
			);

			daysEl.textContent = days;
			hoursEl.textContent = hours;
			minutesEl.textContent = minutes;
			secondsEl.textContent = seconds;
		} else {
			clearInterval(timerInterval);
		}
	};

	const timerInterval = setInterval(updateTimer, 1000);
	updateTimer();
};

countdownTimerPlugin();

// КНОПКА НАВЕРХ
topButtonPlugin = () => {
	const topButton = document.getElementById("top");
	topButton.style.visibility = "hidden";

	window.addEventListener("scroll", function () {
		const scrolled = window.scrollY;
		if (scrolled > 300) {
			topButton.style.visibility = "visible";
		} else {
			topButton.style.visibility = "hidden";
		}
	});

	topButton.addEventListener("click", () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	});
};

topButtonPlugin();

// модалка подарков

function cardClickEvents(gifts) {
	const bestCard = document.querySelectorAll(".best-card");
	const profileDialog = document.querySelector("#profileDialog");
	const modalTitle = document.getElementById("modal-title");
	const modalContent = document.getElementById("modal-content");
	const closeModal = document.querySelector(".close-modal");
	const modalDescription = document.getElementById("modal-description");
	const modalSuperpowers = document.getElementById("modal-superpowers");

	bestCard.forEach((card, index) => {
		const gift = gifts[index];
		card.addEventListener("click", (event) => {
			if (event.target.closest(".modal")) return;
			modalTitle.textContent = gift.category;
			modalContent.textContent = gift.name;
			modalDescription.textContent = gift.description;

			modalSuperpowers.innerHTML = ``;
			for (const [key, value] of Object.entries(gift.superpowers)) {
				const superPower = document.createElement("div");
				superPower.classList.add("superPower");
				superPower.innerHTML = `
					<div class="superPower-title">${
						key.charAt(0).toUpperCase() + key.slice(1)
					}</div>
					<div class="superPower-range">
						<div class="superPower-range-number">${value}</div>
						 <div class="superPower-range-bar" ></div>
					</div>
				`;
				modalSuperpowers.appendChild(superPower);
			}
			profileDialog.showModal();
			document.body.classList.add("no-scroll");
		});
	});

	function closeDialog() {
		profileDialog.close();
		document.body.classList.remove("no-scroll");
	}

	closeModal.addEventListener("click", (event) => {
		event.stopPropagation();
		closeDialog();
	});

	profileDialog.addEventListener("click", (event) => {
		if (event.target === profileDialog) {
			closeDialog();
		}
	});
}

document.addEventListener("DOMContentLoaded", () => {
	fetch("./gifts.json")
		.then((response) => response.json())
		.then((gifts) => {
			renderGifts(gifts);
			cardClickEvents(gifts);
		})
		.catch((error) => console.error("Error loading gifts:", error));
});
function renderGifts(gifts) {
	const cardContainer = document.querySelector(".best-card-container");
	const shuffledGifts = gifts.sort(() => Math.random() - 0.5);
	const randGifts = shuffledGifts.slice(0, 4);
	randGifts.forEach((gift) => {
		const card = document.createElement("div");
		card.classList.add("best-card");
		card.innerHTML = `
			<div class="best-card-image"></div>
			<div class="best-card-text">
				<h5>${gift.category}</h5>
				<h4>${gift.name}</h4>
			</div>
		`;
		cardContainer.appendChild(card);
	});
}
