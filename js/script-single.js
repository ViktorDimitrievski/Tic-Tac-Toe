'use strict';
var tictactoe = [["", ""], ["qwe", "", "", ""], ["qwe", "", "", ""], ["qwe", "", "", ""]]; // niza koja ja polnime so X i 0

/* prototype */
Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)];
};
/* prototype */
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

function moveBot(xORo) {
    var botPosition,
        oChar = "o";
    if (tictactoe[1][1] === xORo && tictactoe[1][2] === xORo) {
        tictactoe[1][3] = oChar;
        botPosition = 13;
    } else if (tictactoe[1][2] === xORo && tictactoe[1][3] === xORo) {
        tictactoe[1][1] = oChar;
        botPosition = 11;
    } else if (tictactoe[2][1] === xORo && tictactoe[2][2] === xORo) {
        if (tictactoe[2][3] === oChar) {
            return true;
        } else {
            tictactoe[2][3] = oChar;
            botPosition = 23;
        }

    } else if (tictactoe[2][2] === xORo && tictactoe[2][3] === xORo) {
        tictactoe[2][1] = oChar;
        botPosition = 21;
    } else if (tictactoe[3][1] === xORo && tictactoe[3][2] === xORo) {
        tictactoe[3][3] = oChar;
        botPosition = 33;
    } else if (tictactoe[3][2] === xORo && tictactoe[3][3] === xORo) {
        tictactoe[3][1] = oChar;
        botPosition = 31;
    } else if (tictactoe[1][1] === xORo && tictactoe[2][1] === xORo) {
        tictactoe[3][1] = oChar;
        botPosition = 31;
    } else if (tictactoe[1][2] === xORo && tictactoe[2][2] === xORo) {
        tictactoe[3][2] = oChar;
        botPosition = 32;
    } else if (tictactoe[1][3] === xORo && tictactoe[2][3] === xORo) {
        tictactoe[3][3] = oChar;
        botPosition = 33;
    } else if (tictactoe[3][1] === xORo && tictactoe[2][1] === xORo) {
        tictactoe[1][1] = oChar;
        botPosition = 11;
    } else if (tictactoe[3][2] === xORo && tictactoe[2][2] === xORo) {
        tictactoe[1][2] = oChar;
        botPosition = 12;
    } else if (tictactoe[3][3] === xORo && tictactoe[2][3] === xORo) {
        if (tictactoe[1][3] === oChar) {
            return true;
        } else {
            tictactoe[1][3] = oChar;
            botPosition = 13;
        }
    } else if (tictactoe[1][1] === xORo && tictactoe[2][2] === xORo) {
        tictactoe[3][3] = oChar;
        botPosition = 33;
    } else if (tictactoe[3][3] === xORo && tictactoe[2][2] === xORo) {
        tictactoe[1][1] = oChar;
        botPosition = 11;
    } else if (tictactoe[1][3] === xORo && tictactoe[2][2] === xORo) {
        tictactoe[3][1] = oChar;
        botPosition = 31;
    } else if (tictactoe[3][1] === xORo && tictactoe[2][2] === xORo) {
        tictactoe[1][3] = oChar;
        botPosition = 13;
    }
    return botPosition;
}

function botMove(xORo, fiveClicks) {
    var i,
        j,
        trueORfalse,
        changeInArray = 0,
        oneTimeCheck = 1;

    for (i = 1; i < tictactoe.length; i += 1) {
        for (j = 1; j < tictactoe.length - 1; j += 1) {


            if (tictactoe[i][1] === '' && tictactoe[i][2] === '' && tictactoe[i][3] === '') {
                j = tictactoe.length;
            } else {
                if (tictactoe[i][j] === tictactoe[i][j + 1]) { //&& (tictactoe[i][j] === '' || tictactoe[i][j + 1] === '')) {

                    trueORfalse = (tictactoe[i][j + 2] === '') ? tictactoe[i][j + 2] = 'o' : (tictactoe[i][j - 1] === '') ? tictactoe[i][j - 1] = 'o' : false;
                    if (trueORfalse) {
                        j = tictactoe.length;
                        i = tictactoe.length;
                        changeInArray += 1;
                    }

                }
                trueORfalse = j < 2 ? true : false;
                if (trueORfalse) {
                    if (tictactoe[i][j] === tictactoe[i][j + 2] && tictactoe[i][j + 1] === '') {
                        tictactoe[i][j + 1] = 'o';
                        changeInArray += 1;
                        j = tictactoe.length;
                        i = tictactoe.length;
                    }
                }
            }
        }
    }
    if (changeInArray === 1) {
        return changeInArray;
    } else {
        for (j = 1; j < tictactoe.length; j += 1) {
            for (i = 1; i < tictactoe.length - 1; i += 1) {

                if (tictactoe[1][j] === '' && tictactoe[2][j] === '' && tictactoe[3][j] === '') {
                    i = tictactoe.length;
                } else {
                    if (tictactoe[i][j] === tictactoe[i + 1][j]) { //&& tictactoe[i][j] !== ''){ova moze treba da e pred zagrada)staveno ama moze i bez

                        if (i === 2) {
                            trueORfalse = (tictactoe[i - 1][j] === '') ? tictactoe[i - 1][j] = 'o' : false;
                        } else {
                            trueORfalse = (tictactoe[i + 2][j] === '') ? tictactoe[i + 2][j] = 'o' : false;
                        }
                        //trueORfalse = (tictactoe[i + 2][j] === '') ? tictactoe[i + 2][j] = 'o' : (tictactoe[i - 1][j] === '') ? tictactoe[i - 1][j] = 'o' : false;
                        if (trueORfalse) {
                            changeInArray += 1;
                            i = tictactoe.length;
                            j = tictactoe.length;
                        }
                    }
                    trueORfalse = i < 2 ? true : false;
                    if (trueORfalse) {
                        if (tictactoe[i][j] === tictactoe[i + 2][j] && tictactoe[i + 1][j] === '') {
                            tictactoe[i + 1][j] = 'o';
                            changeInArray += 1;
                            i = tictactoe.length;
                            j = tictactoe.length;
                        }
                    }
                }
            }
        }
    }
    if (changeInArray === 1) {
        return changeInArray;
    } else if (fiveClicks > 1) {
        //ovoj kod dole proveruva dali ima negde moznost za pobeda na x vo kosite strani
        if (tictactoe[1][1] === '' && tictactoe[2][2] === '' && tictactoe[3][3] === '') {
            trueORfalse += 1;
        } else {
            if (tictactoe[1][1] === tictactoe[2][2] && tictactoe[3][3] === '') {
                tictactoe[3][3] = "o";
                changeInArray += 1;
            } else if (tictactoe[3][3] === tictactoe[2][2] && tictactoe[1][1] === '') {
                tictactoe[1][1] = "o";
                changeInArray += 1;
            } else if (tictactoe[1][1] === tictactoe[3][3] && tictactoe[2][2] === '') {
                tictactoe[2][2] = "o";
                changeInArray += 1;
            }
        }


        if (tictactoe[1][3] === '' && tictactoe[2][2] === '' && tictactoe[3][3] === '') {
            trueORfalse += 1;
        } else {
            if (tictactoe[1][3] === tictactoe[2][2] && tictactoe[3][1] === '') {
                tictactoe[3][1] = "o";
                changeInArray += 1;
            } else if (tictactoe[3][1] === tictactoe[2][2] && tictactoe[1][3] === '') {
                tictactoe[1][3] = "o";
                changeInArray += 1;
            } else if (tictactoe[3][1] === tictactoe[1][3] && tictactoe[2][2] === '') {
                tictactoe[2][2] = "o";
                changeInArray += 1;
            }
        }
        return changeInArray;
    }
}

$(document).ready(function () {
    var klik = 0, // promenliva broime dali e klikato za X ili za 0 ako e 0 togas treba da se stavi X i ako e 1 togas 0
        i = 0, // index promenliva za for ciklusots
        j = 0,
        xORo = "", // ova e za da postavime vrednost X ili 0 i vredosta ja dodavame kako klasa i vredost vo nizata tictactoe
        positionOfClick = 0,
        parsedPositionOfClick = 0,
        xWins = 0,
        oWins = 0,
        checkedValue = "",
        fiveClicks = 0,
        testForX = "x",
        testForO = "o",
        randomFirst = 0,
        randomSecond = 0,
        botPosition = 0,
        tttPositions = [11, 12, 13, 21, 22, 23, 31, 32, 33];

    function removeClickEvent() {
        $(".clicked")
            .unbind("click");
    }

    function makeOliveOnScreen(botPosition) {
        var xORo = "o";
        console.log($("div[data-pos='" + botPosition + "']"));
        $("div[data-pos='" + botPosition + "']")
            //.addClass(xORo) //mu dodavame klasa vo zavisnost od vrednosta na xORo
            .removeClass("clicked") // ja briseme klasata clicked
            .unbind("click") // mu go briseme eventot na divot koj e prethodno zadaden
            .children() // go barame children elementot
            .addClass(xORo); //na childrenot mu stavame klasa
    }

    function magicClick() {

        $(".clicked").click(function () {
            console.log($(".clicked"));
            positionOfClick = $(this).data("pos"); // odreduvanje na klik pozicija
            console.log("Klik od covek t.e x = " + positionOfClick);

            xORo = "x";

            parsedPositionOfClick = parseInt(positionOfClick / 10, 10); //zasto e ova napisano vaka na sledniot link -> http://goo.gl/dgIv5Y
            for (i = 0; i < tictactoe.length; i += 1) {
                if (i === parsedPositionOfClick) {
                    tictactoe[parsedPositionOfClick][positionOfClick % 10] = xORo;
                }
            }
            // Call for our boot to move right and we have position if is made some changes in array
            /*botPosition = 0;
            botPosition = moveBot(testForX);*/

            if (fiveClicks === 0) {
                botPosition = 0;
            } else {
                botPosition = botMove(xORo, fiveClicks);
            }

            if (botPosition) {

                for (i = 1; i < tictactoe.length; i += 1) {
                    for (j = 1; j < tictactoe.length; j += 1) {

                        if (tictactoe[i][1] === '' && tictactoe[i][2] === '' && tictactoe[i][3] === '') {
                            j = tictactoe.length;

                        } else if (tictactoe[i][j] === 'o') {
                            botPosition = i * 10 + j;
                            /*                            var pom;
                                                        pom = $.inArray(botPosition, tttPositions);
                                                        if (pom >= 0) {*/

                            makeOliveOnScreen(botPosition);
                            botPosition = tttPositions.indexOf(botPosition);
                            tttPositions.splice(botPosition, 1);
                            // }
                        }
                    }
                }

            } else {
                for (i = 0; i < 1000; i += 1) {
                    botPosition = tttPositions.randomElement();
                    randomFirst = parseInt(botPosition / 10, 0);
                    randomSecond = parseInt(botPosition % 10, 0);
                    if (tictactoe[randomFirst][randomSecond] === "") {
                        tictactoe[randomFirst][randomSecond] = "o";
                        i = 1600;
                        //oPosArray.push(botPosition);
                        makeOliveOnScreen(botPosition);
                        botPosition = tttPositions.indexOf(botPosition);
                        tttPositions.splice(botPosition, 1);
                    }
                }
                fiveClicks += 1;
            }

            console.log($(this));
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
        j = 0;
        xORo = "";
        parsedPositionOfClick = 0;
        fiveClicks = 0;
        tictactoe = [["", ""], ["qwe", "", "", ""], ["qwe", "", "", ""], ["qwe", "", "", ""]];
        botPosition = 0;
        randomFirst = 0;
        randomSecond = 0;

        // oPosArray = [],
        tttPositions = [11, 12, 13, 21, 22, 23, 31, 32, 33];

        console.log(klik, i, j, xORo, fiveClicks, tictactoe, botPosition, randomFirst, randomSecond, tttPositions);
        removeClickEvent();

        $(".x,.o").removeClass("x o");

        $("*[data-pos]").addClass("clicked");

        magicClick();
    });

});