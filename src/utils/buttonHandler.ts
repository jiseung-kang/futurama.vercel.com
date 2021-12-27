export const btnLeftHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
	const cont = document?.querySelector('.slide')
	if (cont) cont.scrollLeft -= 100
}

export const btnRightHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
	const cont = document?.querySelector('.slide')
	if (cont) cont.scrollLeft += 100
}

export const onWheel = (event: React.WheelEventHandler<HTMLDivElement>) => {
	console.log('move...')
	const cont = document.querySelector('.slide')
	if (cont) cont.scrollLeft += event.deltaY
}
