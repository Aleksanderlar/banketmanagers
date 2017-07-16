$(document).ready(function () {

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
        widthFill($(this));
    });


    $(document).on('input', '.countMansText', function () {
        $(this).parent().parent().find(".range").val($(this).val());
        $(this).parent().parent().find(".fill").css({
            "width": ($(this).parent().parent().find(".range").width() - 20) * $(this).parent().parent().find(".range").val() / $(this).parent().parent().find(".range").attr("max")
        });

    });
});


$j15(document).ready(function () {
    $(function () {
        $j15("#container").clickCarousel({margin: 5});
        $(window).resize(function () {
            $(".fill").each(function () {
                widthFill($(this));
            });
        });
    });
});

function log(log) {
    console.log(log);
}
function widthFill(fill) {
    fill.css({
        "width": (fill.parent().find(".range").width() - 20) * fill.parent().find(".range").val() / fill.parent().find(".range").attr("max")
    });
}