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

$('#button').click(function(){
    if($(this).hasClass('button-switch--dark')){
        $(this).removeClass('button-switch--dark')
        $(this).text('🌞')
        $('body').removeClass('body--dark')
        $('.section').removeClass('section--dark')
        $('.header__info-head').removeClass('header__info-head--dark')
        $('.header__info-link').removeClass('header__info-link--dark')
        $('.footer').removeClass('footer--dark')
        $('#hecho span').text('🖤')
        $(this).attr('title', 'Modo claro')
    }
    else{
        $(this).addClass('button-switch--dark')
        $(this).text('🌚')

        $('body').addClass('body--dark')
        $('.section').addClass('section--dark')
        $('.header__info-head').addClass('header__info-head--dark')
        $('.header__info-link').addClass('header__info-link--dark')
        $('.footer').addClass('footer--dark')
        $('#hecho span').text('🤍')
        $(this).attr('title', 'Modo oscuro')

    }

    
})