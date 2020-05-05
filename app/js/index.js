const bar = document.getElementsByClassName('bar');

const nodesArray = Array.from(bar);

nodesArray.forEach((item) => {
	const width = item.getAttribute("data-width");
	item.style.width = `${width}%`;
})

/*const toggler = document.getElementById('toggle');
const target = document.getElementById('target');
const targetIcon = document.getElementById('target-icon');

toggler.addEventListener('click', function () {
	target.classList.toggle('active');
	targetIcon.classList.toggle('open');
})*/
