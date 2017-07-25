$(document).ready(function () {
    var interval = setInterval(function () {
        $(".ws-current, .ws-prev, .ws-next, .ws-empty").addClass("btn btn-warning btn-calendar");

        if ($(document).find(".picker-grid button").length > 0) {
            clearInterval(interval);
            //    setClicker();
        }
    }, 250);

    setInterval(function () {
        $(document).find(".picker-grid button[class*= 'day-'], .ws-current, #hide-calendar").click(function () {
            setTimeout(function () {
                $("#calendar").addClass("hidden").removeClass("col-md-8");
                $("#menus").removeClass("col-md-4");
                $("#container").reloadClickCarousel();
                //setClicker();
            }, 250);
        });
    }, 250);

    $("#show-calendar").click(function () {
        $("#calendar").removeClass("hidden").addClass("col-md-8");
        $("#menus").addClass("col-md-4");
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