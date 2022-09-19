var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")
tglbtn.addEventListener('click', () => {navlst.classList.toggle("active");});

// event pada saat link di klik
$('.page-scroll').on('click', function(e) {

  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('html,body').animate({
    scrollTop: elemenTujuan.offset().top - 50
  }, 1250, 'easeInOutExpo');

  e.preventDefault();
});

// event pada saat link di klik
$('.logo-container').on('click', function(e) {

  // ambil isi href
  var tujuan = $(this).attr('href');
  // tangkap elemen yang bersangkutan
  var elemenTujuan = $(tujuan);

  // pindahkan scroll
  $('html,body').animate({
    scrollTop: elemenTujuan.offset().top
  }, 1250, 'easeInOutExpo');

  e.preventDefault();
});