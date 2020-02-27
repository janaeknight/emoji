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


// Game INTF.

var a = [
    "friendship",
    "pancake",
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
    "the little mermaid",
    "red riding hood", "little red riding hood",
    "goldilocks", "goldilocks and the three bears", "the three bears",
    "snow white",
    "ugly duckling", "the ugly duckling",
    "beauty and the beast",
    "cinderella",
    "hansel and gretel", "the story of hansel and gretel",
    "sleeping beauty",
    "the frog prince", "frog prince", "princess and the frog", "the princess and the frog",
    "turn up the music",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

let start = document.getElementById("start");
let lvls = document.getElementById("level-select");
let lvls2 = document.getElementById("lvls-p2");
let gmb = document.getElementById("gamebox");
var stp = 0;
var ltp = 0;

const levels = [...document.querySelectorAll('.levelSelect')];
const levelsGame = document.querySelectorAll('.level');
for (const level of levels) {
    level.addEventListener('click', showLevel);
}

function showLevel() {
    // hide everything first
    lvls2.style.display = "none";
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
}


function startgame() {
    $(".hiddenMain, #main").hide();
    $("#gamebox").show();

    if (stp >= 1 || ltp>=1 ) {
        gmb.style.display = "block";
    } else {
        gmb.style.display = "block";
        lvl1.style.display = "block";
        stp =+ 1;
        document.getElementById('stgtxt').innerHTML = "> Back to Game";
    }
};

    // Hints UI

    $(".hintTop").on("click", function() {
        $(this).hide();
        $(this).next(".hintBtm").show(); ;
    });