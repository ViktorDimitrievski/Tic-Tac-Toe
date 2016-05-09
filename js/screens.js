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



function checkInput(name, areaID) {

    if (name.length >= 3) {
        if ($("#errormsg_" + areaID).length >= 1) {
            $("#errormsg_" + areaID).remove();
            return 1;
        } else {
            return 1;
        }
    } else {
        if ($("#errormsg_" + areaID).length >= 1) {
            return 0;
        } else {
            $("<span></span>")
                .text("You can't leave this empty.")
                .addClass("errormsg")
                .attr("id", "errormsg_" + areaID)
                .insertAfter("#" + areaID);
            return 0;
        }
    }
}

$("input[type='text']").focusout(function () {
    var name, areaID;
    name = $(this).val();
    areaID = $(this).attr("id");
    checkInput(name, areaID);
});

$("#playSingle").click(function () {
    var playerName, areaID, isValid;

    playerName = $("#singlePlayer").val();
    areaID = $("#singlePlayer").attr("id");
    isValid = checkInput(playerName, areaID);

    if (isValid) {
        $("#firstInputName").text(playerName);
        $("#secondInputName").text("Viktor");
        $(".overAll").fadeOut(1000);
        setTimeout(function () {
            $("#main").fadeIn();
            $(".footer").fadeIn();
        }, 1500);
    }
});

$("#playMulti").click(function () {
    var firstPlayer, secondPlayer, areaID, isValid = 0;
    firstPlayer = $("#firstPlayer").val();
    secondPlayer = $("#secondPlayer").val();

    areaID = $("#firstPlayer").attr("id");
    isValid += checkInput(firstPlayer, areaID);

    areaID = $("#secondPlayer").attr("id");
    isValid += checkInput(secondPlayer, areaID);

    if (isValid === 2) {
        //$(".errormsg").remove();
        $("#firstInputName").text(firstPlayer);
        $("#secondInputName").text(secondPlayer);
        $(".overAll").fadeOut(1000);


        setTimeout(function () {
            $("#main").fadeIn();
            $(".footer").fadeIn();
        }, 1500);
    }
});

$("#gamePlaySingle").click(function () {

    $("#welcomeScreen").fadeOut();
    setTimeout(function () {
        $("#singlePlayerSettings").fadeIn();
    }, 500);

    var path = "js/script-single.js";
    loadScript(path);
});

$("#gamePlayMulti").click(function () {
    $("#welcomeScreen").fadeOut();
    setTimeout(function () {
        $("#multiPlayerSettings").fadeIn();
    }, 500);

    var path = "js/script-multi.js";
    loadScript(path);
});