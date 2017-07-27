$(document).ready(function () {
    var interval = setInterval(function () {
        $(".ws-current, .ws-prev, .ws-next, .ws-empty").addClass("btn btn-warning btn-calendar");

        if ($(document).find(".picker-grid button").length > 0) {
            clearInterval(interval);
        }
    }, 250);

    setInterval(function () {
        $(document).find(".index-calendar-month td.day:not('.disabled'), #hide-calendar").click(function () {
            setTimeout(function () {
                $("#calendar").addClass("hidden").removeClass("col-md-4");
                $("#menus").removeClass("col-md-8");
                $("#container").reloadClickCarousel();
            }, 300);
        });
    }, 250);

    $("#show-calendar").click(function () {
        $("#calendar").removeClass("hidden").addClass("col-md-4");
        $("#menus").addClass("col-md-8");
        $("#container").reloadClickCarousel();
    });
});

function setClicker() {
    $(document).find(".btn-calendar").click(function () {
        setTimeout(function () {
            setClicker();
        }, 100);
    });

}