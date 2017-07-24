$(function () {
    $('.format-date').each(function () {
        var $display = $('.date-display', this);
        $(this).on('change', function (e) {
            //webshim.format will automatically format date to according to webshim.activeLang or the browsers locale
            var localizedDate = webshim.format.date($.prop(e.target, 'value'));
            $display.html(localizedDate);
        });
    });
});
