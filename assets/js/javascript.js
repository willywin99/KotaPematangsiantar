var tglbtn = document.getElementById("nav-toggle");
var navlst = document.getElementById("nav-list");
tglbtn.addEventListener("click", () => {
	navlst.classList.toggle("active");
});

// Create a media condition that targets viewports at least 600px wide
const mediaQuery = window.matchMedia("(max-width: 600px)");

function screenTest(e) {
	// Check if the media query is true
	if (e.matches) {
		// event pada saat link di klik
		$(".page-scroll").on("click", function (e) {
			// ambil isi href
			var tujuan = $(this).attr("href");
			// tangkap elemen yang bersangkutan
			var elemenTujuan = $(tujuan);

			// pindahkan scroll
			$("html,body").animate(
				{
					scrollTop: elemenTujuan.offset().top - 200,
				},
				2500,
				"easeInOutExpo"
			);

			// navlst.classList.toggle("active");

			e.preventDefault();
		});
	} else {
		// event pada saat link di klik
		$(".page-scroll").on("click", function (e) {
			// ambil isi href
			var tujuan = $(this).attr("href");
			// tangkap elemen yang bersangkutan
			var elemenTujuan = $(tujuan);

			// pindahkan scroll
			$("html,body").animate(
				{
					scrollTop: elemenTujuan.offset().top - 50,
				},
				2500,
				"easeInOutExpo"
			);

			// navlst.classList.toggle("active");

			e.preventDefault();
		});
	}
}

// Pada saat ada perubahan pada max-width dari versi desktop ke mobile atau sebaliknya maka event ini akan di-trigger
mediaQuery.addEventListener("change", screenTest);

// event pada saat link di klik
$(".logo-anchor").on("click", function (e) {
	// ambil isi href
	var tujuan = $(this).attr("href");
	// tangkap elemen yang bersangkutan
	var elemenTujuan = $(tujuan);

	// pindahkan scroll
	$("html,body").animate(
		{
			scrollTop: elemenTujuan.offset().top,
		},
		5000,
		"easeInOutExpo"
	);

	navlst.classList.toggle("active");

	e.preventDefault();
});
