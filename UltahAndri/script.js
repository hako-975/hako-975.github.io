var musik = "";

var audio = document.querySelector(".audio");
if (musik) {
  audio.src = musik;
}

AOS.init({
  once: true,
});

function mulai() {
  audio.play();
  window.scrollTo(0, 0);
  document.querySelector(".open").style = "opacity: 0;";
  document.querySelector(".body").style = "overflow-y: scroll;";
  setTimeout(function() {
    document.querySelector(".open").style.display = "none";
  }, 1000);
}

function wa(isi) {
  window.open("https://api.whatsapp.com/send?text= Makasih ya udah inget ulang tahun aku, di hari spesial ini aku pengin " + isi);
}

async function tanya() {
  var {
    value: kado
  } = await swal.fire({
    imageUrl: 'resources/title.png',
    title: "Di hari spesial ini, kamu ingin apa?",
    input: "text",
    showCancelButton: false,
  });
  if (kado) {
    await swal.fire({
      imageUrl: 'resources/wa.png',
      title: "Kirim jawabannya ke wa aku ya"
    });
    wa(kado);
  } else {
    await swal.fire({
      icon: 'error',
      title: "Jangan dikosongin dong"
    });
    tanya();
  }
}