// находим кнопку открытия меню
const mobileOpenButton= document.querySelector('#openMobileNav')
// находим кнопку закрытия меню
const mobileCloseButton = document.querySelector('#closeButtonNav')
// находим  меню
const mobileNav = document.querySelector('.mobile-nav')
// находим ссылки  в мобильной навигации
const mobileNavLinks = mobileNav.querySelectorAll('a,button')
// прослушиваем кнопку открыть
mobileOpenButton.addEventListener('click', function(){
	mobileNav.classList.add('mobile-nav__open')
	document.body.classList.add('no-scroll')
})
// прослушиваем кнопку закрыть
mobileCloseButton.addEventListener('click', function(){
	mobileNav.classList.remove('mobile-nav__open')
		document.body.classList.remove('no-scroll')
})
// перебираем все сылки моб навигации
mobileNavLinks.forEach(function(item){
item.addEventListener('click', function(){
	mobileNav.classList.remove('mobile-nav__open')
		document.body.classList.remove('no-scroll')
})
})