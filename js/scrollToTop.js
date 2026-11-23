const scrolBtn = document.querySelector('#scrollToTopBtn')

window.addEventListener('scroll', function () {
	scrolBtn.classList.toggle(
		'top-link--visible',
		window.scrollY > window.innerHeight,
	)
})
