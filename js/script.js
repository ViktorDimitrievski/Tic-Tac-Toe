'use strict';

function winWin(tictactoe, xORo) {
    if (tictactoe[1][1] === xORo && tictactoe[1][2] === xORo && tictactoe[1][3] === xORo) {
        return xORo;
    } else if ((tictactoe[2][1] === xORo && tictactoe[2][2] === xORo && tictactoe[2][3]) === xORo) {
        return xORo;
    } else if (tictactoe[3][1] === xORo && tictactoe[3][2] === xORo && tictactoe[3][3] === xORo) {
        return xORo;
    } else if (tictactoe[1][1] === xORo && tictactoe[2][1] === xORo && tictactoe[3][1] === xORo) {
        return xORo;
    } else if (tictactoe[1][2] === xORo && tictactoe[2][2] === xORo && tictactoe[3][2] === xORo) {
        return xORo;
    } else if (tictactoe[1][3] === xORo && tictactoe[2][3] === xORo && tictactoe[3][3] === xORo) {
        return xORo;
    } else if (tictactoe[1][1] === xORo && tictactoe[2][2] === xORo && tictactoe[3][3] === xORo) {
        return xORo;
    } else if (tictactoe[1][3] === xORo && tictactoe[2][2] === xORo && tictactoe[3][1] === xORo) {
        return xORo;
    }
}

$(document).ready(function () {
    var klik = 0, // promenliva broime dali e klikato za X ili za 0 ako e 0 togas treba da se stavi X i ako e 1 togas 0
        i = 0, // index promenliva za for ciklusots
        xORo = "", // ova e za da postavime vrednost X ili 0 i vredosta ja dodavame kako klasa i vredost vo nizata tictactoe
        positionOfClick = 0,
        parsedPositionOfClick = 0,
        tictactoe = [["", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]], // niza koja ja polnime so X i 0
        xWins = 0,
        oWins = 0,
        checkedValue = "",
        fiveClicks = 0,
        testForX = "x",
        testForO = "o";

    function removeClickEvent() {
        $(".clicked")
            .unbind("click");
    }

    function magicClick() {

        $(".clicked").click(function () {
            //console.log($(".clicked"));
            positionOfClick = $(this).data("pos"); // odreduvanje na klik pozicija
            //console.log(positionOfClick);

            if (klik === 0) {
                xORo = "x";
                klik = 1;
            } else {
                xORo = "o";
                klik = 0;
            }

            parsedPositionOfClick = parseInt(positionOfClick / 10, 10); //zasto e ova napisano vaka na sledniot link -> http://goo.gl/dgIv5Y
            for (i = 0; i < tictactoe.length; i += 1) {
                if (i === parsedPositionOfClick) {
                    tictactoe[parsedPositionOfClick][positionOfClick % 10] = xORo;
                }
            }

            $(this)
                //.addClass(xORo) //mu dodavame klasa vo zavisnost od vrednosta na xORo
                .removeClass("clicked") // ja briseme klasata clicked
                .unbind("click") // mu go briseme eventot na divot koj e prethodno zadaden
                .children()
                .addClass(xORo);

            fiveClicks += 1;
            if (fiveClicks >= 2) {
                checkedValue = winWin(tictactoe, testForX);
                //console.log(checkedValue);
                if (checkedValue === testForX) {
                    xWins += 1;
                    $("#xWins").text(xWins);
                    removeClickEvent();

                }
                checkedValue = winWin(tictactoe, testForO);
                // console.log(checkedValue);
                if (checkedValue === testForO) {
                    oWins += 1;
                    $("#oWins").text(oWins);
                    removeClickEvent();
                }
            }
            //proveruvame koje pobednik ja isprakame nizata i xORo so vrednost x ili o 


        });
    } // kraj na funckijata magicClick
    magicClick();

    $("#newgame").click(function () {
        klik = 0;
        i = 0;
        xORo = "";
        parsedPositionOfClick = 0;
        fiveClicks = 0;
        tictactoe = [["", ""], ["", "", "", ""], ["", "", "", ""], ["", "", "", ""]];

        removeClickEvent();

        $(".x,.o").removeClass("x o");

        $("*[data-pos]").addClass("clicked");
        magicClick();
    });


});