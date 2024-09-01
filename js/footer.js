$('.wrap-produit-footer').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	arrows: true,
	autoplay:true,
	center:false,
	dots: false,
	vertical: true,
	verticalSwiping: true,
	autoplaySpeed: 3000,

	prevArrow: $('.prev-slick'),
	nextArrow: $('.next-slick')
});


$(document).ready(function name() {
$(".icon_bar").click(function name() {
	$('.widget_menu.content_panel_menu_mobile').css("visibility", "visible");
	$('.widget_menu.content_panel_menu_mobile').css("opacity", 1);
	$('.widget_menu.content_panel_menu_mobile').css("left", 0);
});

$(".contentclose").click(function name() {
	$('.widget_menu.content_panel_menu_mobile').css("visibility", "hidden");
	$('.widget_menu.content_panel_menu_mobile').css("opacity", 0);
	$('.widget_menu.content_panel_menu_mobile').css("left", "-100%");
});
});




