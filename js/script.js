$(document).ready(function () {

    var headerPosition = $('header').offset().top;

    $(window).scroll(function () {

        if ($(window).scrollTop() > headerPosition) {
            $('header').addClass('sticky');

        } else {
            $('header').removeClass('sticky');
        }
    });

    // menu toggle
    $(".menu-icon").click(function () {
        $("#navItems").toggleClass("show-mobile-nav");
        $(this).toggleClass("active");
        $(".nav-items").toggleClass("show-mobile-nav");
    });


    // footer year 
    var currentYear = new Date().getFullYear();
    $('#currentYear').text(currentYear);
});


