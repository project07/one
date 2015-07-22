$(document).ready(function(){
	var scrolltop = 0;
	var topNavigationScroll = $(window).height();
	var flag_car1 = true;
	var flag_car2 = true;
	var flag_car3 = true;
	var flag_car4 = true;
	var flag_car5 = true;
	var flag_car6 = true;
	var feature_1 = $("#feature-1").offset().top - topNavigationScroll * 0.6;
	var feature_2 = $("#feature-2").offset().top - topNavigationScroll * 0.6;
	var feature_3 = $("#feature-3").offset().top - topNavigationScroll * 0.6;
	var benefit_1 = $("#benefit-1").offset().top - topNavigationScroll * 0.6;
	var benefit_2 = $("#benefit-2").offset().top - topNavigationScroll * 0.6;
	var benefit_3 = $("#benefit-3").offset().top - topNavigationScroll * 0.6;

	$(window).scroll(function(){
		scrolltop = $(window).scrollTop();

		//show elements features
		if(flag_car1 && scrolltop > feature_1){
			$("#feature-1 > .description-item-left").css({"opacity":"1"});
			$("#feature-1 > .description-item-left > .text-features").css({"margin-top": "130px", "opacity":"1"});
			$("#feature-1 > .description-item-right").css({"opacity":"1"});
			$("#feature-1 > .description-item-right > .description-item-image").css({"margin-top": "50px", "opacity":"1"});
			flag_car1 = false;
		}
		if(flag_car2 && scrolltop > feature_2){ 
			$("#feature-2 > .description-item-left").css({"opacity":"1"});
			$("#feature-2 > .description-item-left > .description-item-image").css({"margin-top": "50px", "opacity":"1"});
			$("#feature-2 > .description-item-right").css({"opacity":"1"});
			$("#feature-2 > .description-item-right > .text-features").css({"margin-top": "130px", "opacity":"1"});
			flag_car2 = false;
		}
		if(flag_car3 && scrolltop > feature_3){
			$("#feature-3 > .description-item-left").css({"opacity":"1"});
			$("#feature-3 > .description-item-left > .text-features").css({"margin-top": "130px", "opacity":"1"});
			$("#feature-3 > .description-item-right").css({"opacity":"1"});
			$("#feature-3 > .description-item-right > .description-item-image").css({"margin-top": "50px", "opacity":"1"});
			flag_car3 = false;
		}
		if(flag_car4 && scrolltop > benefit_1){
			$("#benefit-1").css({"opacity":"1"});
			$("#benefit-1 > .img-benefits").css({"margin-top": "25px", "opacity":"1"});
			flag_car4 = false;
		}
		if(flag_car5 && scrolltop > benefit_2){
			$("#benefit-2").css({"opacity":"1"});
			$("#benefit-2 > .img-benefits").css({"margin-top": "34px", "opacity":"1"});
			flag_car5 = false;
		}
		if(flag_car6 && scrolltop > benefit_3){
			$("#benefit-3").css({"opacity":"1"});
			$("#benefit-3 > .img-benefits").css({"margin-top": "29px", "opacity":"1"});
			flag_car6 = false;
		}
	});


    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 70)
        }, 1200, 'easeInOutExpo');
        event.preventDefault();
    });


});