$(document).ready(function () {

    $("#wrapper .d-carousel ul li").each(function () {
        $(this).width(($(".d-carousel").width() - 35) / 3);
    });

    $("ul.carousel").width(9999);
    $(".d-carousel .jcarousel-prev-horizontal, .d-carousel .jcarousel-next-horizontal").each(function () {
        $(this).css({"top": $("#wrapper").height() / 2});
    });
    $(document).on('input', '.range', function () {
        $(this).parent().parent().find(".countMansText").val($(this).val());
        $(this).parent().parent().find(".fill").css({
            "width": ($(this).width() - 20) * $(this).val() / $(this).attr("max")
        });
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
});