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

    function widthFill(fill) {
        fill.css({
            "width": (fill.parent().find(".range").width() - 20) * fill.parent().find(".range").val() / fill.parent().find(".range").attr("max")
        });
    }

    $(document).on('input', '.countMansText', function () {
        $(this).parent().parent().find(".range").val($(this).val());
        widthFill($(this).parent().parent().find(".fill"));
    });


    $(".dishes-grid img").click(function () {
        var imgThumb = $(this);
        $("#title").text(imgThumb.attr("data-title"));
        $("#description").text(imgThumb.attr("data-description"));
        $("#addCheck").prop('checked', imgThumb.parent().find("input[type='checkbox']").prop("checked"));
        var img = $("#img");
        img.attr("src", imgThumb.attr("data-img"));
        var block = $("#dishBlock");
        block.modal('toggle');
        block.one('shown.bs.modal', function () {
            widthFill(img.parent().parent().find(".fill"));
            block.on('input', '.range', function () {
                $(this).parent().parent().parent().find(".countMansText").val($(this).val());
                $(this).parent().parent().parent().find(".fill").css({
                    "width": ($(this).width() - 20) * $(this).val() / $(this).attr("max")
                });
            });

            block.on('input', '.countMansText', function () {
                $(this).parent().parent().parent().find(".range").val($(this).val());
                widthFill($(this).parent().parent().parent().find(".fill"));
            });
        });
        block.one('hide.bs.modal', function () {
            block.off("on");
            imgThumb.parent().find("input[type='checkbox']").prop("checked", block.find("#addCheck").prop("checked"));
        });
    });

    $(".dishes").each(function () {
        $(this).on('input', '.range', function () {
            $(this).parent().parent().parent().find(".countMansText").val($(this).val());
            $(this).parent().parent().parent().find(".fill").css({
                "width": ($(this).width() - 20) * $(this).val() / $(this).attr("max")
            });
        });

        $(this).on('input', '.countMansText', function () {
            $(this).parent().parent().parent().find(".range").val($(this).val());
            widthFill($(this).parent().parent().parent().find(".fill"));
        });
    });

    $(".dishes input[type=checkbox]").click(function () {
        var prop = $(this).prop("checked");
        if(!prop) $(this).parent().parent().find("div:first").addClass("opacity-on");
        else $(this).parent().parent().find("div:first").removeClass("opacity-on");
    });
});