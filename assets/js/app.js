$(document).ready(() => {
    $('#search-btn').click((e) => {
        $('#search-form').toggleClass('hide');
        $('#search-column').toggleClass('hide');
        e.preventDefault();
    });

    $('.navbar-toggler').click(() => {
        if (!$('#search-form').hasClass('hide') && $(window).width() < 1000) {
            $('#search-form').toggleClass('hide');
            $('#search-column').toggleClass('hide');
        }
    });

    $('.row').click(() => {
        if ($('#search-column').hasClass('hide')) {
            $('#search-form').toggleClass('hide');
            $('#search-column').toggleClass('hide');
        }
    });

    // let homeLink = $('.home-intro-right a');

    // const homeAnimation = () => {
    //     homeLink.css({fontWeight: 600, color: '#000'});
    //     homeLink.animate ({
    //         fontWeight: 200,
    //     }, 'slow', () => {
    //         homeAnimation();
    //     });
    // }

    // if (homeLink.length !== 0) {
    //     homeAnimation()
    // }
});