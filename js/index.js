/*window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 80 ) {
        $('.header').css('justify-content', 'flex-start')
        $('.header').css('padding', '1rem')
        $('.header').css('background-color', 'rgba(243, 243, 243, 0.1)')

        $('.header__info-head').css('font-size','1rem')
        
    } else {
        $('.header').css('justify-content', 'center')
        $('.header').css('padding', '5rem')
        $('.header__info-head').css('font-size','1.5rem')
        $('.header').css('background-color', 'none')

    }
} 
*/


$(function() {
    var links = $('a.header__info-link').click(function() {
        links.removeClass('header__info-link--active');
        $(this).addClass('header__info-link--active');
    });
});