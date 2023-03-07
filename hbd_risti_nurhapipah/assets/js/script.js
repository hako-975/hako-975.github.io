AOS.init();

lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'wrapAround': true
})

var musik = '';

var audio = document.querySelector('.audio');
if (musik) {
  audio.src = musik;
}

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  var mail_section = $('#mail-section');
  $('#mail').attr('src', 'assets/img/mail.gif');
  setTimeout(function() {
    mail_section.css('opacity', 0);
    $('body').removeClass('overflow-hidden');
  }, 2000);
  setTimeout(function() {
    mail_section.removeClass('d-flex');
    mail_section.addClass('d-none');
  }, 4000);
}

function wa(isi) {
  open("https://wa.me/6287808675313?text=Makasih%20ya%20udah%20inget%20ulang%20tahun%20aku,%20di%20hari%20spesial%20ini%20aku%20ingin " + isi);
}

async function tanya() {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'assets/img/makeawishphoto.png',
    title: 'Di hari spesial ini, kamu mau apa?',
    input: 'text',
    showCancelButton: false
  });

  if (kado) {
    await swal.fire({
      imageUrl: 'assets/img/wa.png',
      title: 'Kirim jawabannya ke wa aku ya?'
    });
    wa(kado);
  } else {
    await swal.fire({
      icon: 'error',
      title: 'Jangan dikosongin dong!'
    });
    tanya();
  }
}
