const projects = [
	{
		name: 'juliacarriquiry.com',
		image: './img/pexels-abhishek-saini-2929411.jpg',
		imagesize: 'big',
		description:
			'Julia Carriquiry is a professional photographer living in Sydney, Austraila. This is a website was developed to show her portfolio, a contact form as well as a place to inspire others. This project started with an original design made in wix, it has been recreated using no-code platfrom such as Webflow but also Html, CSS and JavaScript. It uses formspree and hostinger for hosting services.',
		alt: 'juliacarriquiry.com',
		link: 'https://www.juliacarriquiry.com/',
		skills: ['html', 'css', 'js'],
	},
	{
		name: 'Comfy House',
		image: './img/pexels-pixabay-164595.jpg',
		imagesize: 'sm',
		description:
			'Comfy house is a recreation of an e-commerce website to improve my front-end skills. It basically focuses on advance topics of css and js, but it retreives data from contenful and is deployed on Netflify.',
		alt: 'Comfy House',
		link: 'https://comfy-house-juanmaurente.netlify.app/',
		skills: ['html', 'css', 'js', 'github'],
	},
	{
		name: 'Calculator',
		image: './img/pexels-karolina-grabowska-4386326.jpg',
		imagesize: 'sm',
		description:
			'Calculator project is a recreation of the old Apple - iphone calculator. It performs basic operations of a calculator. This was my first JavaScript project.',
		alt: 'Calculator',
		link: 'https://juanmaurente.github.io/Calculator/',
		skills: ['html', 'css', 'sass', 'js', 'github', 'jira'],
	},
	{
		name: 'Tech. e-commerce site',
		image: './img/183672771-ac5368e8-e0e5-4ff0-b62c-719faa35b99b.png',
		imagesize: 'big',
		description:
			'This was our first React project on the nology program. It involved design the UI from scratch, setting up the development environment incluiding firebase to store and retreive our data from the cloud. Implement the front end and testing.',
		alt: 'Tech. e-commerce site',
		link: './img/183672771-ac5368e8-e0e5-4ff0-b62c-719faa35b99b.png',
		skills: ['html', 'css', 'sass', 'js', 'github', 'react'],
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
const modal = document.getElementById('modal');
const modalContainerLeft = document.querySelector('.modal__container__left');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalText = document.getElementById('modalDescription');
const closeButton = document.querySelector('.modal__container--close');
const navbar = document.getElementById('navbar');

//Populate Projects Section
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

//Event listener for clicking an image
document.querySelectorAll('.projects__gallery img').forEach((image) => {
	image.onclick = () => {
		const nameOfSelectedProject = image.getAttribute('alt');
		const project = projects.find(
			(item) => item.alt === nameOfSelectedProject,
		);
		displayModal(project);
	};
});

closeButton.addEventListener('click', hideModal);

function hideModal() {
	modal.style.display = 'none';
	modalImage.src = '';
	modalImage.alt = '';
	navbar.style.display = 'sticky';
}

function displayModal(project) {
	modal.style.display = 'flex';
	modalImage.src = project.image;
	modalImage.alt = project.name;
	modalTitle.innerText = project.name;
	modalText.innerText = project.description;
	navbar.style.display = 'none';

	// so far I am creating a div with image coming from project selected (working)
}

function myFunction() {
	var x = document.getElementById('navbar');
	if (x.className === 'navbar') {
		x.className += '--responsive';
	} else {
		x.className = 'navbar';
	}
}
