export function renderGifts(gifts, cardContainer, style, isHome = false) {
	const shuffledGifts = gifts.sort(() => Math.random() - 0.5);
	const giftsToRender = isHome ? shuffledGifts.slice(0, 4) : shuffledGifts;
	giftsToRender.forEach((gift) => {
		const card = document.createElement("div");
		card.classList.add(`${style}-card`);
		card.innerHTML = `
             <div class="${style}-card-image"></div>
            <div class="${style}-card-text">
                <h5>${gift.category}</h5>
                <h4>${gift.name}</h4>
            </div>
        `;
		cardContainer.appendChild(card);
	});
}
