// модалка подарков
export const giftModalPlugin = (
	// cardContainer, card
	gifts,
	card
) => {
	// document.addEventListener("DOMContentLoaded", () => {
	// 	fetch("./gifts.json")
	// 		.then((response) => response.json())
	// 		.then((gifts) => {
	// 			renderGifts(gifts, cardContainer, "gift");
	// 			cardClickEvents(gifts, card);
	// 		})
	// 		.catch((error) => console.error("Error loading gifts:", error));
	// });
	// function cardClickEvents(gifts) {
	// const giftCard = document.querySelectorAll(".gift-card");
	const profileDialog = document.querySelector("#profileDialog");
	const modalTitle = document.getElementById("modal-title");
	const modalContent = document.getElementById("modal-content");
	const closeModal = document.querySelector(".close-modal");
	const modalDescription = document.getElementById("modal-description");
	const modalSuperpowers = document.getElementById("modal-superpowers");

	card.forEach((card, index) => {
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
	// }

	// function renderGifts(gifts, cardContainer, style) {
	// 	const shuffledGifts = gifts.sort(() => Math.random() - 0.5);
	// 	// const randGifts = shuffledGifts.slice(0, 4);
	// 	shuffledGifts.forEach((gift) => {
	// 		const card = document.createElement("div");
	// 		card.classList.add(`${style}-card`);
	// 		card.innerHTML = `
	//              <div class="${style}-card-image"></div>
	//             <div class="${style}-card-text">
	//                 <h5>${gift.category}</h5>
	//                 <h4>${gift.name}</h4>
	//             </div>
	//         `;
	// 		cardContainer.appendChild(card);
	// 	});
	// }
};
