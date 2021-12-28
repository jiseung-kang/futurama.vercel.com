export const btnLeftHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
	const cont = document?.querySelector('.slide')
	if (cont) cont.scrollLeft -= 100
}

export const btnRightHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
	const cont = document?.querySelector('.slide')
	if (cont) cont.scrollLeft += 100
}
