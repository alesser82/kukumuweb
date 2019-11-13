$(document).ready(() => {
    // search button onclick
    $('#search-btn').click((e) => {
        $('#search-form').toggleClass('hide');
        $('#search-column').toggleClass('hide');
        e.preventDefault();
    });

    let windowWidth = $(window).width();
    let imgSlide    = $('.img-slide');

    var jarakWindow     = $(window).scrollTop();

    if (imgSlide.length > 0) {
        var jarakKelasku    = $('.kelasku-row-2').offset().top;
    }

    const imgSlideAnimation = () => {
        $('.img-slide').animate({
            right: '0%',
            opacity: 1,
        }, 1000);
    }

    if ((jarakKelasku - jarakWindow) < 500) {
        imgSlideAnimation();
    }

    $(window).scroll(function () {

        var jarakWindow     = $(window).scrollTop();

        if ($('.kelasku-row-2').length > 0) {
            var jarakKelasku = $('.kelasku-row-2').offset().top;
        }

        if ((jarakKelasku - jarakWindow) < 750 && windowWidth > 900 && imgSlide.length > 0 && (jarakKelasku - jarakWindow) > 500) {
            imgSlideAnimation();
        }
    });

    // navbar toggler onclick
    $('.navbar-toggler').click(() => {
        // check user web browser
        if (!$('#search-form').hasClass('hide') && $(window).width() < 1000) {
            $('#search-form').toggleClass('hide');
            $('#search-column').toggleClass('hide');
        }
    });

    // page onclick
    $('.row').click(() => {
        if ($('#search-column').hasClass('hide')) {
            $('#search-form').toggleClass('hide');
            $('#search-column').toggleClass('hide');
        }
    });

    // click continue-content handler
    $('#continue-read').click(function (e) {
        if ($(this).attr('href') == '#continue-content') {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: $('#continue-content').offset().top,
            }, 400);
        }
    });

    // navbar
    $('.navbar-toggler').click(() => {
        $('.navbar').toggleClass('active');
    });

});