//Ova e funkcija koja stava efekt na kopceto koga ke se klikne
$(function () {
    var btnClick, bWidth, bHeight, x, y, posX, posY,d;
    $(".btn").click(function (e) {
        e.preventDefault();

        posX = $(this).offset().left;
        posY = $(this).offset().top;
        bWidth = $(this).outerWidth();
        bHeight = $(this).outerHeight();
        d = Math.max(bWidth,  bHeight);
        
        $(".btn-over").remove();

        if ($(this).find(".btn-over").length === 0) {
            $(this).prepend("<span class='btn-over'></span>");
        }

        x = e.pageX - posX - bWidth / 2;
        y = e.pageY - posY - bHeight / 2;

        $(".btn-over").css({
            width: d,
            height: d,
            top: y + 'px',
            left: x + 'px'
        }).addClass("animation");
    });
});

