const slider = tns({
	container: '.slider',
	items: 3,
	slideBy: 'page',
	mouseDrag: true,
	swipeAngle: false,
	gutter: 20,
	speed: 400,
	autoWidth: true,
	lazyload: true,
	controlsContainer: '.locations__controls',
	nav: false,
})
const prevMobile = document.querySelector('.locations__controls--mobile .prev')
const nextMobile = document.querySelector('.locations__controls--mobile .next')

prevMobile.onclick = () => slider.goTo('prev')

nextMobile.onclick = () => slider.goTo('next')
