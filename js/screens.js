'use strict';
// http://stackoverflow.com/questions/950087/include-a-javascript-file-in-another-javascript-file
function loadScript(jsFilePath) {
    var js;
    js = document.createElement("script");
    //    jsFilePath = "js/script-computer.js";
    //    js.type = "text/javascript";
    js.src = jsFilePath;

    document.body.appendChild(js);
}

$(function () {
    var btnClick, bWidth, bHeight, x, y, posX, posY, d;
    $(".btn").click(function (e) {
        e.preventDefault();

        posX = $(this).offset().left;
        posY = $(this).offset().top;
        bWidth = $(this).outerWidth();
        bHeight = $(this).outerHeight();
        d = Math.max(bWidth, bHeight);

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

$("#playSingle").click(function () {
    var singlePlayerName = $("#singlePlayer").val();
    $("#firstInputName").text(singlePlayerName);
    $("#secondInputName").text("Viktor");
    $(".overAll").fadeOut(1000);
});

$("#playMulti").click(function () {
    var first, second;
    first = $("#firstPlayer").val();
    second = $("#secondPlayer").val();
    $("#firstInputName").text(first);
    $("#secondInputName").text(second);
    $(".overAll").fadeOut(1000);
});

$("#gamePlaySingle").click(function () {

    $("#welcomeScreen").fadeOut();
    setTimeout(function () {
        $("#singlePlayerSettings").fadeIn();
    }, 500);
    var path = "js/script-computer.js";
    loadScript(path);
});

$("#gamePlayMulti").click(function () {
    $("#welcomeScreen").fadeOut();
    setTimeout(function () {
        $("#multiPlayerSettings").fadeIn();
    }, 500);
    var path = "js/script.js";
    loadScript(path);
});