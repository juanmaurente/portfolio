document.querySelectorAll('.projects__gallery img').forEach((image) => {
	image.onclick = () => {
		document.querySelector('.projects__popup').style.display = 'block';
		document.querySelector('.projects__popup img').src =
			image.getAttribute('src');
		document.querySelector('.projects__popup h2').innerHTML =
			image.getAttribute('alt');
	};
});

document.querySelector('.projects__popup span').onclick = () => {
	document.querySelector('.projects__popup').style.display = 'none';
};

function myFunction() {
	var x = document.getElementById('navbar');
	if (x.className === 'navbar') {
		x.className += '--responsive';
	} else {
		x.className = 'navbar';
	}
}
