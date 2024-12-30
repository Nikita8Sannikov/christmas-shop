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

	window.addEventListener("resize", updateSliderInfo);
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
