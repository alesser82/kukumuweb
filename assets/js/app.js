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
});