$(document).scroll(function () {
	var y = $(this).scrollTop();
	if (y > 200) {
		$('.special-header').fadeIn();
	} else {
		$('.special-header').fadeOut();
	}
});
