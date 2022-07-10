let photo = document.querySelectorAll('.projects__photo');

photo.forEach((popup) =>
	popup.addEventListener('click', () => {
		popup.classList.toggle('projects__imgBox--active');
	}),
);
