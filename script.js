$(document).ready(function () {
    $('.menu-selection').hide();

    $('.menu-nav-btn').on('click', function () {
        const target = $(this).data('target');

        // Hide all sections
        $('.menu-selection').hide();

        // Show the clicked one
        $(target).show();

        // Manage active state
        $('.menu-nav-btn').removeClass('active-btn');
        $(this).addClass('active-btn');
    });


});
