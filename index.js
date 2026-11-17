document.querySelectorAll('*').forEach(el => {
	if (el.offsetWidth > document.documentElement.offsetWidth) console.log(el)
})
