export const tabsPlugin = () => {
	const tabs = document.querySelectorAll(".gift-section_header nav li");

	tabs.forEach((tab) => {
		tab.addEventListener("click", (event) => {
			event.preventDefault();
			tabs.forEach((tab) => {
				tab.classList.remove("active");
			});
			tab.classList.add("active");

			const category = tab.textContent
				.trim()
				.toLowerCase()
				.replace(" ", "");

			const cards = document.querySelectorAll(".gift-card");

			cards.forEach((card) => {
				if (card.classList.contains(category) || category === "all") {
					card.style.display = "block";
				} else {
					card.style.display = "none";
				}
			});
		});
	});
};
