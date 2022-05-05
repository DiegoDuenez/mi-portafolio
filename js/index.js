$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if(scroll < 15){
        var links = $('a.header__info-link')
        links.removeClass('header__info-link--active');
    }
});


$(function() {
    var links = $('a.header__info-link').click(function() {
        links.removeClass('header__info-link--active');
        $(this).addClass('header__info-link--active');
    });
});