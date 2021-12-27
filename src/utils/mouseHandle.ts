export const boxMouseOverHandler = (event: React.MouseEvent<HTMLDivElement>) => {
	const box: HTMLDivElement = event.currentTarget;
	const menu = document.querySelector<HTMLDivElement>('.lst-menu');
	const btn = document.querySelector<HTMLDivElement>('.btn-menu');
	if (btn && menu) {
		btn.style.display = 'none';
		menu.style.display = 'flex';
	}
};

export const boxMouseOutHandler = (event: React.MouseEvent<HTMLDivElement>) => {
	const box: HTMLDivElement = event.currentTarget;
	const menu = document.querySelector<HTMLDivElement>('.lst-menu');
	const btn = document.querySelector<HTMLDivElement>('.btn-menu');
	if (btn && menu) {
		menu.style.display = 'none';
		btn.style.display = 'block';
	}
};
