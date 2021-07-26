$(document).ready(function() {

    //Open search panel
    $('div.header__search-wrap').click(function () {
        $('div.overlay').addClass('active');
    });

    //Close search panel
    $('div.overlay__close').click(function () {
        $('div.overlay').removeClass('active');
    });



    //Open burger menu
    $('div.burger-menu__icon').click(function () {
        $('div.burger-menu__content').addClass('active');
    });

    //Close burger menu
    $('div.burger-menu__close').click(function () {
        $('div.burger-menu__content').removeClass('active');
    });
});