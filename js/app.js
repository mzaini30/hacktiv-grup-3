function $(x) {
	return document.querySelector(x)
}

function keAtas() {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	})
}

function beranda() {
	keAtas()
	$('.semua-pemain').style.display = 'none'
	$('.bagian-beranda').style.display = 'block'
}
beranda()

function pemain() {
	keAtas()
	$('.semua-pemain').style.display = 'block'
	$('.bagian-beranda').style.display = 'none'
}