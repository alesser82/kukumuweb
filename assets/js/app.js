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

    $('.new-section').on('mousewheel',function (e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            if (!$(this).is(':last-child')) {
                $('html, body').animate({ scrollTop: $(this).next().offset().top }, 400);
            }
        } else {
            if (!$(this).is(':first-child')) {
                $('html, body').animate({ scrollTop: $(this).prev().offset().top }, 400);
            }
        }
        return;
    });

});