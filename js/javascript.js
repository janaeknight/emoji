// Window UI

$(".window").addClass("ui-widget-content"); // <-- drag class (REQ.)
$(function() { $(".window").draggable(); }); // <!--- makes windows draggable

$(".window").on("click", function() {
    $(".window").removeClass("activeZ");    // <-- Rearranges layering on a/w
    $(this).addClass("activeZ");
});

$(".xThisWindow").on("click", function() {
    $(this).closest(".window").hide();
});

function removeAllActiveZ() {
    $(".window").removeClass("activeZ");
}

// p -- Main UI

$("#gotoSmiley").on("click", function() {
    removeAllActiveZ();
    $("#smiley").show();
    $("#smiley").addClass("activeZ");
});
$("#gotoCheatsheet").on("click", function() {
    removeAllActiveZ();
    $("#cheatsheet").show();
    $("#cheatsheet").addClass("activeZ");
});
$("#gotoInstructions").on("click", function() {
    $("#main").hide();
    $("#instructions").show();
});
$("#gotoLvlSel").on("click", function() {
    $("#main").hide();
    $("#lvlSel").show();
});

$(".gotoMain").on("click", function() {
    $(".hiddenMain").hide();
    $("#main").show();
});

    // Lvl Select UI
            // ------------> Shows next page with "lvlSelPg" class, hides THIS page
                $(".toLvlPgNxt").on("click", function() {
                    $(this).parent().parent().hide();
                    $(this).parent().parent().next(".lvlSelPg").show();
                });

            // ------------> Shows last page with "lvlSelPg" class, hides THIS page

                $(".toLvlPgPrev").on("click", function() {
                    $(this).parent().parent().hide();
                    $(this).parent().parent().prevAll(".lvlSelPg:first").show();
                });

    // Cheatsheet UI

    $("#cheatPassUnlockBtn").click(function() {
        let cheatPassInput = $("#cheatsheet input:password").val();
        if(cheatPassInput === "password1") {
            $("#cheatPasslock").hide();
            $("#cheatWindowTop").show();
        } else {
            $("#cheatPassInput").val(""); // clears incorrect password
        }
    });

        $(".csNext").click(function() {
            var thisCheatScreen = $(this).closest('.cheatWindow');
            var nextCheatScreen = $(thisCheatScreen).next('.cheatWindow');
            thisCheatScreen.hide();
            nextCheatScreen.show();
        });
        $(".csPrev").click(function() {
            var thisCheatScreen = $(this).closest('.cheatWindow');
            var prevCheatScreen = $(thisCheatScreen).prev('.cheatWindow');
            thisCheatScreen.hide();
            prevCheatScreen.show();
        });

// Game INTF.

let start = document.getElementById("start");
let lvls = document.getElementById("lvlSel");
//let lvls2 = document.getElementById("lvls-p2");
let gmb = document.getElementById("gamebox");
var stp = 0; var ltp = 0;

const levels = [...document.querySelectorAll('.levelSelectNum')];
const levelsGame = document.querySelectorAll('.level');
for (const level of levels) {
    level.addEventListener('click', showLevel);
};

// Shows Level From #lvlSel Num Click

function showLevel() {
    // hide everything first
    //lvls2.style.display = "none";
    for (const game of levelsGame) {
        game.style.display = "none";
        ltp =+ 1;
        console.log(ltp);
    }
    let level = levels.indexOf(this);
    let game = levelsGame[level];
    lvls.style.display = "none";
    gmb.style.display = "block";
    game.style.display = 'block';
};

// Initially Starts Game && Changes ' > Start Game ' Text

function startgame() {
    $(".hiddenMain, #main").hide();
    $("#gamebox").show();

    if (stp >= 1 || ltp>=1 ) {
        $("#gamebox").show();
        // fix bug => After clicking 'Level Select' and selecting a level; anytime you go back to the main menu '>Start Game' txt doesn't change to '>Back to Game'
    } else {
        $("#gamebox").show();
        $("#lvl1").show();
        stp =+ 1;
        document.getElementById('stgtxt').innerHTML = "> Back to Game";
    };

    document.getElementById('stgtxt').innerHTML = "> Back to Game";
};

    // Hints UI

    $(".hintTop").on("click", function() {
        $(this).hide();
        $(this).next(".hintBtm").show(); ;
    });


// Poor Man's "Game" Backend ---->


var A = [
    "friendship",
    "pancake", "pancakes",
    "fireman", "firemen",
    "sunflower",
    "mailbox",
    "dragonfly",
    "earring",
    "cartwheel",
    "toothbrush",
    "honeymoon",
    "carpool",
    "fishnet",
    "anthill",
    "milkman", "milk man",
    "bowtie",
    "fireproof", "fire-proof",
    "campfire",
    "bluebird", "bluejay",
    "cupcake",
    "bullfrog",
    "the three little pigs", "three pigs",
    "puss in boots",
    "aladdin",
    "tortoise and hare", "the tortoise and the hare", "tortoise and the hare",
    "the little mermaid", "little mermaid",
    "red riding hood", "little red riding hood",
    "goldilocks", "goldilocks and the three bears", "the three bears",
    "snow white",
    "ugly duckling", "the ugly duckling",
    "beauty and the beast",
    "cinderella",
    "hansel and gretel", "the story of hansel and gretel", "gretel and hansel",
    "sleeping beauty",
    "the frog prince", "frog prince", "princess and the frog", "the princess and the frog",
    "turn up the music",
    "baby, it's cold outside", "baby it's cold outside", "baby its cold outside",
    "no photos allowed", "no photos",
    "handicap accessible",
    "free wifi",
    "rock on",
    "i believe you",
    "music to my ears",
    "i'm blessed",
    "happy halloween", "happy halloween!",
    "i love pizza",
    "girls night out", "girl's night out", "girl's night", "girls night",
    "heard the news", "heard the news?",
    "cross my heart", "cross your heart",
    "time's running out", "times running out",
    "oh my god",
    "stop monkeying around",
    "we come in peace",
    "happy birthday", "happy birthday!",
    "wanna build a snowman", "do you wanna build a snowman",
    "water under the bridge",
    "piece of cake",
    "old news",
    "break the ice",
    "french kiss",
    "lovebird", "lovebirds",
    "starbucks",
    "burger king",
    "cowboy",
    "cookie monster",
    "queen bee", "queen b",
    "pumpkin pie",
    "corndog",
    "apple tv",
    "killer whale",
    "rainbow",
    "headlight", "headlights",
    "wheelchair",
    "spiderman",
    "the walking dead",
    "it",
    "i love lucy",
    "buffy the vampire slayer",
    "the wizard of oz", "wizard of oz",
    "godzilla",
    "africa",
    "north america",
    "asia",
    "europe",
    "south america",
    "antartica",
    "austrailia",
    "chinese new year", "chinese new years",
    "hanukkah",
    "marriage",
    "easter",
    "ramadan",
    "earth day",
    "diwali",
    "day of the dead",
    "apple",
    "chik fil a",
    "mc donald's", "mc donalds",
    "amazon",
    "sprint",
    "windows"
]

$(".subBtn").click(function() {
    //var userA = $(".input").val(); // gets input from input
    var userA = $(".input:visible").val(); // gets input from VISIBLE input. This distinction is 👍
    console.log(userA);

        if ($.inArray(userA, A) !=-1) {
            // GO TO NEXT, BUT DO NOTHING RN

                var thisStage = $(this).closest('.level');
                var nextStage = $(thisStage).next('.level');

                thisStage.hide();
                nextStage.show();
                $('.input').val(""); // clears input box
        } else {
            // DO NOTHING
                $('.input').val(""); // clears input box
                console.log("Something is wrong...");
        }
});