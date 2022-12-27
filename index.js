const projects = [
	{
		name: 'juliacarriquiry.com',
		image: './img/pexels-abhishek-saini-2929411.jpg',
		imagesize: 'big',
		description:
			'Julia Carriquiry is a professional photographer living in Sydney, Austraila. This is a website was developed to show her portfolio, a contact form as well as a place to inspire others',
		alt: 'juliacarriquiry.com',
		link: 'https://www.juliacarriquiry.com/',
	},
	{
		name: 'Comfy House',
		image: './img/Screenshot 2022-08-10 095750.png',
		imagesize: 'sm',
		description:
			'Comfy house is a recreation of an e-commerce website to improve my front-end skills.',
		alt: 'Comfy House',
		link: 'https://comfy-house-juanmaurente.netlify.app/',
	},
	{
		name: 'Calculator',
		image: './img/Screenshot 2022-08-10 095338.png',
		imagesize: 'sm',
		description:
			'Calculator project is a recreation of the old Apple - iphone calculator. It performs basic operations of a calculator. This was my first JavaScript project.',
		alt: 'Calculator',
		link: 'https://juanmaurente.github.io/Calculator/',
	},
	{
		name: 'Tech. e-commerce site',
		image: './img/183672771-ac5368e8-e0e5-4ff0-b62c-719faa35b99b.png',
		imagesize: 'big',
		description:
			'Calculator project is a recreation of the old Apple - iphone calculator. It performs basic operations of a calculator. This was my first JavaScript project.',
		alt: 'Tech. e-commerce site',
		link: './img/183672771-ac5368e8-e0e5-4ff0-b62c-719faa35b99b.png',
	},
	{
		name: 'Crypto Project',
		image: './img/pexels-worldspectrum-844124.jpg',
		imagesize: 'github',
		description:
			'This is a code-along project done in React which fetch crypto info from rapid-api and displays latest crypto market data.',
		alt: 'Crypto Project',
		link: '#',
	},
	{
		name: 'Github',
		image: './img/kisspng-computer-icons-logo-portable-network-graphics-clip-icons-for-free-iconza-circle-social-5b7fe46b4ec817.2080142615351082033227.png',
		imagesize: 'sm',
		description:
			'This is a code-along project done in React which fetch crypto info from rapid-api and displays latest crypto market data.',
		alt: 'Crypto Project',
		link: 'https://github.com/juanmaurente',
	},
];

const gallery = document.getElementById('projects');

for (const project of projects) {
	//create a div container
	const projectDiv = document.createElement('div');
	//check the size of the image I want to display
	if (project.imagesize == 'big') {
		projectDiv.classList.add('projects__image', 'projects__image--big');
	}
	projectDiv.classList.add('projects__image');

	const image = document.createElement('img');
	image.src = project.image;
	image.alt = project.name;

	projectDiv.appendChild(image);

	gallery.appendChild(projectDiv);
}

document.querySelectorAll('.projects__gallery img').forEach((image) => {
	image.onclick = () => {
		const image = image.getAttribute('src');

		// document.querySelector('.projects__popup').style.display = 'block';
		// document.querySelector('.projects__popup img').src =
		// 	image.getAttribute('src');
		// document.querySelector('.projects__popup h2').innerHTML =
		// 	image.getAttribute('alt');
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
