//Ova e funkcija koja stava efekt na kopceto koga ke se klikne
$(function () {
    var btnClick, d, x, y;
    $(".btn").click(function (e) {
        e.preventDefault();
        
        if ($(this).find(".btn-over").length === 0) {
            $(this).prepend("<span class='btn-over'></span>");
        }

        btnClick = $(this).find(".btn-over");
        btnClick.removeClass("animation");

        if (!btnClick.height() && !btnClick.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            btnClick.css({
                height: d,
                width: d
            });
        }

        x = e.pageX - $(this).offset().left - btnClick.width() / 2;
        y = e.pageY - $(this).offset().top - btnClick.height() / 2;

        btnClick.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animation");
    });
});