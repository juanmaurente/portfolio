document.querySelectorAll('.projects__gallery img').forEach((image) => {
	image.onclick = () => {
		document.querySelector('.projects__popup').style.display = 'block';
		document.querySelector('.projects__popup img').src =
			image.getAttribute('src');
	};
});

document.querySelector('.projects__popup span').onclick = () => {
	document.querySelector('.projects__popup').style.display = 'none';
};
