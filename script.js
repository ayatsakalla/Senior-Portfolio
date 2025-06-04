$(document).ready(function () {
    $(".menu-nav-btn").click(function () {
        // Get target ID from data-target attribute
        var target = $(this).data("target");

        // Hide all sections
        $(".menu-selection").addClass("d-none");

        // Show the selected section
        $(target).removeClass("d-none");
    });
});
