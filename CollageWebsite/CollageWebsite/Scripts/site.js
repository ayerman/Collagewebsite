$(document).ready(function () {
    $(".toggle_container").hide();

    $("p.trigger").click(function () {
        $(this).toggleClass("active").next().slideToggle("normal");
    });
});