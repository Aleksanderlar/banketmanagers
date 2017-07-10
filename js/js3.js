$(document).ready(function () {

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
    $(document).on('click', '[data-toggle="lightbox"]', function (event) {
        event.preventDefault();
        $(this).ekkoLightbox();
    });

    $("img").click(function () {
        var img = $(this);
        $("#title").text(img.attr("data-title"));
        $("#description").text(img.attr("data-description"));
        $("#img").attr("src", img.attr("data-img"));
        modalBlock($("#dishBlock"));
    });

    var block = $("#dishBlock");

    function modalBlock(div, func) {
        var title = $(div).find(".modal-block-title").html();
        $(div).find(".modal-block-title").html("");
        var body = $(div).find(".modal-block-body").html();
        $(div).find(".modal-block-body").html("");
        var btns = $(div).find(".modal-block-button").html();
        $(div).find(".modal-block-button").html("");
        block.find(".modal-title").html(title);
        block.find(".modal-body").html(body);
        block.find(".modal-footer-left").html(btns);
        block.modal('toggle');
        if (func !== undefined) func();
        block.on('hide.bs.modal', function () {
            block.off("on");
            $(div).find(".modal-block-title").html(title);
            $(div).find(".modal-block-body").html(body);
            $(div).find(".modal-block-button").html(btns);
        });
    }
});