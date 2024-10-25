$(document).ready(function () {
	$('.xscroll').niceScroll();

	$(window).scroll(function () {
		if ($(this).scrollTop() > 170) {
			$('.hidable').slideDown();
			$('.scrollup').fadeIn();
		} else {
			$('.hidable').slideUp();
			$('.scrollup').fadeOut();
		}
	});
	$('.scrollup').click(function () {
		$('html, body').animate(
			{
				scrollTop: 0,
			},
			600
		);
		return false;
	});
});