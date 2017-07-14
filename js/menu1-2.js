$(document).ready(function () {

    var minWidth = 300;
    $("ul.carousel").width("");
    var ww = $("ul.carousel").width();
    $("#wrapper .d-carousel ul li").each(function () {
        var liw = $(".d-carousel").width() / Math.floor(ww / minWidth)-10;
        if (liw < minWidth) liw = minWidth;
        $(this).width(liw);
    });
    $("ul.carousel").width(9999);
    $(".d-carousel .jcarousel-prev-horizontal, .d-carousel .jcarousel-next-horizontal").each(function () {
        $(this).css({"top": $("#wrapper").height() / 2});
    });
    $(document).on('input', '.range', function () {
        $(this).parent().parent().find(".countMansText").val($(this).val());
        var width = ($(this).width() - 20) * $(this).val() / $(this).attr("max");
        $(this).parent().parent().find(".fill").css({
            "width": width
        });
        if (width < 3) {
            $(this).parent().parent().find(".fill").addClass("hidden");
        }
        else {
            $(this).parent().parent().find(".fill").removeClass("hidden");
        }
    });

    $(".fill").each(function () {
        $(this).css({
            "width": ($(this).parent().find(".range").width() - 20) * $(this).parent().find(".range").val() / $(this).parent().find(".range").attr("max")
        });
    });
    $(document).on('input', '.countMansText', function () {
        $(this).parent().parent().find(".range").val($(this).val());
        $(this).parent().parent().find(".fill").css({
            "width": ($(this).parent().parent().find(".range").width() - 20) * $(this).parent().parent().find(".range").val() / $(this).parent().parent().find(".range").attr("max")
        });

    });

    function log(log) {
        console.log(log);
    }
});