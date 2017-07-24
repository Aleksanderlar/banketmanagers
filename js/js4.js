$(document).ready(function () {
    setInterval(function () {
        $(".ws-current, .ws-prev, .ws-next, .ws-empty").addClass("btn btn-warning btn-calendar");
    }, 100);
});
$(document).on("click", ".btn-calendar", function () {
    $("#calendar").addClass("hidden").removeClass("col-md-8");
    $("#menus").removeClass("col-md-4");
});
