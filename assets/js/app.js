$(document).ready(() => {
    // search button onclick
    $('#search-btn').click((e) => {
        $('#search-form').toggleClass('hide');
        $('#search-column').toggleClass('hide');
        e.preventDefault();
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

    // mousewheel
    $('.new-section').on('mousewheel',function (e) {
        if (e.deltaY < 0) {
            if (!$(this).is(':last-child')) {
                e.preventDefault();
                // check animated
                if ($(this).next().hasClass('slide-left')) {
                    $('.img-slide').css({right: '-100%', opacity: 0});
                    $('.img-slide').animate({
                        right: '0%',
                        opacity: 1,
                    }, 1000);
                }
                $('html, body').animate({ scrollTop: $(this).next().offset().top }, 400);
            }
        } else {
            if (!$(this).is(':first-child')) {
                e.preventDefault();
                $('html, body').animate({ scrollTop: $(this).prev().offset().top }, 400);
            }
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