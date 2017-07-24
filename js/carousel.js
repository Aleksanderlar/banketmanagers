webshim.setOptions('forms', {
    lazyCustomMessages: true
});
webshim.setOptions('forms-ext', {
    replaceUI: 'auto',
    types: 'date',
    date: {
        startView: 2,
        inlinePicker: true,
        classes: 'hide-inputbtns'
    }
});

//start polyfilling
webshim.polyfill('forms forms-ext');

$(document).ready(function () {

    $("#container").clickCarousel({margin: 5});

    $(document).on('input', '.range', function () {
        $(this).parent().parent().find(".countMansText").val($(this).val());
    });
    $(document).on('input', '.countMansText', function () {
        $(this).parent().parent().find(".range").val($(this).val());
    });
});