AOS.init()

lightbox.option({
	'alwaysShowNavOnTouchDevices': true,
	'wrapAround': true
})

var musik = ''
var audio = document.querySelector('.audio')
if (musik) 
{
	audio.src = musik
}

function mulai()
{
	audio.play()
	window.scrollTo(0, 0)
	var mail_section = $('#mail-section')
	$('#mail').attr('src', 'assets/img/mail.gif')
	setTimeout(function() {
		mail_section.css('opacity', 0)
		$('body').removeClass('overflow-hidden')
	}, 700)
	setTimeout(function() {
		mail_section.removeClass('d-flex')
		mail_section.addClass('d-none')
	}, 1000)
}

function wa(isi)
{
	open("https://wa.me/6282255900922?text=Lop yuu Deway🥰, dihari spesial ini aku mau " + isi)
}

async function makeawish()
{
	var {
		value: kado
	} = await swal.fire({
		imageUrl: 'assets/img/make_a_wish.png',
		title: 'Mau hadiah apa? Tapi udah aku siapin si🌚',
		imageWidth: 400,
		imageHeight: 400,
		confirmButtonColor: '#C88ED4',
		confirmButtonText: 'Kirim📩',
		input: 'text',
		showCancelButton: false
	})

	if (kado) {
		await swal.fire({
			imageUrl: 'assets/img/iconwa.png',
			title:'Kirim jawabannya ke WA aku yaa😎',
			confirmButtonColor: '#C88ED4',
			confirmButtonText: 'Kirim📩'
		})
		wa(kado)
	} else {
		await swal.fire({
			icon: 'error',
			title: 'Gabole kosong, nanti aku marah!'
		})
		makeawish()
	}
}