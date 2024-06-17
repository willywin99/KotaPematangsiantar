var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list")
tglbtn.addEventListener('click', () => {navlst.classList.toggle("active");});

// Create a media condition that targets viewports at least 600px wide
const mediaQuery = window.matchMedia('(max-width: 600px)')
// Check if the media query is true
if (mediaQuery.matches) {
  // event pada saat link di klik
  $('.page-scroll').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('html,body').animate({
      scrollTop: elemenTujuan.offset().top - 200
    }, 1250, 'easeInOutExpo');

    navlst.classList.toggle("active");

    e.preventDefault();
  });
} else {
  // event pada saat link di klik
  $('.page-scroll').on('click', function(e) {
  
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
  
    // pindahkan scroll
    $('html,body').animate({
      scrollTop: elemenTujuan.offset().top
    }, 1250, 'easeInOutExpo');
  
    navlst.classList.toggle("active");
  
    e.preventDefault();
  });
}

// Create a media condition that targets viewports at least 1000px wide
const mediaQuery2 = window.matchMedia('(max-width: 1000px)')
// Check if the media query is true
if (mediaQuery2.matches) {
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

    // navlst.classList.toggle("active");

    e.preventDefault();
  });
} else {
  // event pada saat link di klik
  $('.page-scroll').on('click', function(e) {
  
    // ambil isi href
    var tujuan = $(this).attr('href');
    // tangkap elemen yang bersangkutan
    var elemenTujuan = $(tujuan);
  
    // pindahkan scroll
    $('html,body').animate({
      scrollTop: elemenTujuan.offset().top
    }, 1250, 'easeInOutExpo');
  
    // navlst.classList.toggle("active");
  
    e.preventDefault();
  });
}


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

  navlst.classList.toggle("active");

  e.preventDefault();
});