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
});