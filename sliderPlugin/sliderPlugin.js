const arrowButtonLeft = document.querySelector(".arrow-button.left");
const arrowButtonRight = document.querySelector(".arrow-button.right");
const sliderContainer = document.querySelector(".slider-container");

export const sliderPlugin = (currentPosition = 0) => {
	let numberOfClicks;
	let movePx;

	const updateSliderInfo = () => {
		let visibleArea = sliderContainer.clientWidth;
		let totalSliderWidth = sliderContainer.scrollWidth;

		if (window.innerWidth >= 769) {
			numberOfClicks = 3;
		} else if (window.innerWidth >= 380 && window.innerWidth < 769) {
			numberOfClicks = 6;
		}

		movePx = (totalSliderWidth - visibleArea) / numberOfClicks;

		updateButtonsState();
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
