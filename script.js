$(function(){

	$(".butn").click(function(){
        $(".wrap").slideToggle("slow");
        $(this).toggleClass("active");
    });

	$('.link').on('click', function(event) {
		event.preventDefault();
		$('.link').removeClass('one');
		$(this).addClass('one');
		$('.text').hide();
		$($(this).attr('href')).show('fast');
	});

	//ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

	$('input').on('mouseenter', function(e) {
		$(this).siblings('.tip').animate({opacity: 'show'}, 500);
	});
	$('input').on('mouseleave', function(e) {
		$(this).siblings('.tip').animate({opacity: 'hide'}, 500);
	});
	$('.butt').on('click', function(event) {
		event.preventDefault();
		$('.tip').show('fast');
	});

});



