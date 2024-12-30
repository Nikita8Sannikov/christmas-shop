const burgerIcon = document.querySelector(".burger");
const burgerLinks = document.querySelectorAll(".burger-modal a");
const burgerModal = document.querySelector(".burger-modal");
const burgerModalList = document.querySelector(".burger-modal ul");
const body = document.body;

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
