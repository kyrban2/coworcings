const openModalBtn = document.querySelectorAll('[data-action="modal"]')
const btnClose = document.querySelector('#closeBtn')
const modal = document.querySelector('.modal')
const modalBody = document.querySelector('.modal__body')
function openModal() {
	modal.classList.add('modal--open')
	document.body.classList.add('no-scroll')
}
function closeModal() {
	modal.classList.remove('modal--open')
	document.body.classList.remove('no-scroll')
}
openModalBtn.forEach(function (item) {
	item.addEventListener('click', openModal)
})
btnClose.addEventListener('click', closeModal)
modal.addEventListener('click', closeModal)
modalBody.addEventListener('click', function (e) {
	e.stopPropagation()
})
// закрытие модалки по escape
document.addEventListener('keydown', function (event) {
	if (event.key == 'Escape') {
		closeModal()
	}
})

// __Базовый__
//  modal.addEventListener('click', function () {
//  	modal.classList.remove('modal--open')
// 	document.body.classList.remove('no-scroll')
//  })
// __рефакторинг__
// modal.addEventListener('click', function () {
// 	closeModal()
// })
// ___Можно еще короче__
// modal.addEventListener('click', closeModal)
