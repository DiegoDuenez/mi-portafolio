$(window).scroll(function (event) {
    var links = $('a.header__info-link')
    var scroll = $(window).scrollTop();
    if(scroll <= 2){
        links.removeClass('header__info-link--active');
    }
});


$(function() {
    var links = $('a.header__info-link').click(function() {
        links.removeClass('header__info-link--active');
        links.css('transition','400ms')
        $(this).addClass('header__info-link--active');
    });
});