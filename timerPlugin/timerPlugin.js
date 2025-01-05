// ТАЙМЕР
export const countdownTimerPlugin = () => {
	function getDiff() {
		const targetDate = new Date("2025-01-01T00:00:00Z").getTime();
		const now = new Date().getTime();
		return (targetDate - now) / 1000 / 60 / 60 / 24;
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
