//Scroll the menu
$(window).scroll(function(){
$('nav').toggleClass('scrolled',$(this).scrollTop() > 800)
    if( $(this).scrollTop() > 800){
    $('#scroll-link1').attr('style','color: #182326')
    $('#scroll-link2').attr('style','color: #182326')
    $('#scroll-link3').attr('style','color: #182326')
    $('#scroll-link4').attr('style','color: #182326')
    $('#scroll-link5').attr('style','color: #182326')
    }else{
    $('#scroll-link1').attr('style','color: unset')
    $('#scroll-link2').attr('style','color: unset')
    $('#scroll-link3').attr('style','color: unset')
    $('#scroll-link4').attr('style','color: unset')
    $('#scroll-link5').attr('style','color: unset')
    }
});

//back to top
$(".project-link").on("click", function(e){
$('html, body').animate({scrollTop: $('#projects').offset().top}, 750);
e.preventDefault();
});
$(".life-link").on("click", function(e){
$('html, body').animate({scrollTop: $('#activities').offset().top}, 750);
e.preventDefault();
});
$("#scroll-link1").on("click", function(e){
$('html, body').animate({scrollTop: 0}, 750);
e.preventDefault();
});
$("#back-to-top").on("click", function(e){
$('html, body').animate({scrollTop: 0}, 750);
e.preventDefault();
});
$("#scroll-link2").on("click", function(e){
$('html, body').animate({scrollTop: $('#about-me').offset().top}, 750);
e.preventDefault();
});
$("#scroll-link3").on("click", function(e){
$('html, body').animate({scrollTop: $('#projects').offset().top}, 750);
e.preventDefault();
});
$("#scroll-link4").on("click", function(e){
$('html, body').animate({scrollTop: $('#activities').offset().top}, 750);
e.preventDefault();
});
$("#scroll-link5").on("click", function(e){
$('html, body').animate({scrollTop: $('#album').offset().top}, 750);
e.preventDefault();
});

//slider

$(function (){

    var inWrap = $('.inner-wrapper');

    $('.prev').on('click', //#endregion
    function (){

        inWrap.animate({left: '0%'},
        300, function(){
            inWrap.css('left', '-100%');
            $('.slide').first().before($('.slide').last());
        });
    });

    $('.next').on('click', //#endregion
    function (){

        inWrap.animate({left: '-200%'},
        300, function(){
            inWrap.css('left', '-100%');
            $('.slide').last().after($('.slide').first());
        });
    });





})