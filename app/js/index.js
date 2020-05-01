const bar = document.getElementsByClassName('bar');

const nodesArray = Array.from(bar);

nodesArray.forEach((item) => {
	const width = item.getAttribute("data-width");
	item.style.width = `${width}%`;
	console.log(width);
})
