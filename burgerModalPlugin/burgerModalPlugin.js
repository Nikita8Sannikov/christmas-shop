const burgerIcon = document.querySelector(".burger");
const burgerLinks = document.querySelectorAll(".burger-modal a");
const burgerModal = document.querySelector(".burger-modal");
const burgerModalList = document.querySelector(".burger-modal ul");
const body = document.body;
export const burgerModalPlugin = () => {
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
};
