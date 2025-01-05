// КНОПКА НАВЕРХ
export const topButtonPlugin = () => {
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
