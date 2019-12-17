/*
        BUGS: 
            // On click events with text input respond negatively to using the enter key >:(
            // Wtf you always have to type in lowercase because im dumb
*/
let lvl1 = document.getElementById("wrwc1");
let lvl2 = document.getElementById("dpab2");
let lvl3 = document.getElementById("crew3");
let lvl4 = document.getElementById("bbgh4");
let lvl5 = document.getElementById("jkyg5");
let lvl6 = document.getElementById("dder6");
let lvl7 = document.getElementById("iuhv7");
let lvl8 = document.getElementById("ooie8");
let lvl9 = document.getElementById("nvjr9");
let lvl10 = document.getElementById("oin10");
let lvl11 = document.getElementById("yyb11");
let lvl12 = document.getElementById("neh12");
let lvl13 = document.getElementById("pqw13");
let lvl14 = document.getElementById("tce14");
let lvl15 = document.getElementById("vtv15");
let lvl16 = document.getElementById("vte16");
let lvl17 = document.getElementById("uhv17");
let lvl18 = document.getElementById("nuh18");
let lvl19 = document.getElementById("erd19");
let lvl20 = document.getElementById("asd20");
let lvl21 = document.getElementById("vfm21");
let lvl22 = document.getElementById("mks22");
let lvl23 = document.getElementById("gvh23");
let lvl24 = document.getElementById("mee24");
let lvl25 = document.getElementById("qbm25");
let lvl26 = document.getElementById("nuj26");
let lvl27 = document.getElementById("dxh27");
let lvl28 = document.getElementById("ihu28");
let lvl29 = document.getElementById("bui29");
let lvl30 = document.getElementById("pop30");
let lvl31 = document.getElementById("akz31");
let lvl32 = document.getElementById("koh32");
let lvl33 = document.getElementById("klf33");
let lvl34 = document.getElementById("bhe34");
let lvl35 = document.getElementById("vca35");
let lvl36 = document.getElementById("nbh36");
let lvl37 = document.getElementById("mlp37");
let lvl38 = document.getElementById("wec38");
let lvl39 = document.getElementById("nfl39");
let lvl40 = document.getElementById("evs40");
let lvl41 = document.getElementById("fgh41");
let lvl42 = document.getElementById("ery42");
let lvl43 = document.getElementById("gvh43");
let lvl44 = document.getElementById("bug44");
let lvl45 = document.getElementById("ohb45");
let lvl46 = document.getElementById("nnj46");
let lvl47 = document.getElementById("lld47");
let lvl48 = document.getElementById("dcw48");
let lvl49 = document.getElementById("rfv49");
let lvl50 = document.getElementById("bvy50");
let lvl51 = document.getElementById("ubj51");
let lvl52 = document.getElementById("nhg52");
let lvl53 = document.getElementById("pjd53");
let lvl54 = document.getElementById("btg54");
let lvl55 = document.getElementById("ska55");
let lvl56 = document.getElementById("ebs56");
let lvl57 = document.getElementById("pls57");
let lvl58 = document.getElementById("laj58");
let lvl59 = document.getElementById("lsc59");
let lvl60 = document.getElementById("ojn60");
let lvl61 = document.getElementById("jen61");
let lvl62 = document.getElementById("alb62");
let lvl63 = document.getElementById("psl63");
let lvl64 = document.getElementById("oks64");
let lvl65 = document.getElementById("qsx65");
let lvl66 = document.getElementById("cbe66");
let lvl67 = document.getElementById("msm67");
let lvl68 = document.getElementById("dnw68");
let lvl69 = document.getElementById("owd69");
let lvl70 = document.getElementById("wjw70");
let lvl71 = document.getElementById("bhc71");
let lvl72 = document.getElementById("ihs72");
let lvl73 = document.getElementById("qms73");
let lvl74 = document.getElementById("pkw74");
let lvl75 = document.getElementById("biw75");
let lvl76 = document.getElementById("lsa76");
let lvl77 = document.getElementById("sfg77");
let lvl78 = document.getElementById("yvf78");
let lvl79 = document.getElementById("nkh79");
let lvl80 = document.getElementById("cgm80");
let lvl81 = document.getElementById("ojb81");
let lvl82 = document.getElementById("nkh82");
let lvl83 = document.getElementById("esx83");
let lvl84 = document.getElementById("miu84");
let lvl85 = document.getElementById("plj85");
let lvl86 = document.getElementById("brs86");
let lvl87 = document.getElementById("mbh87");
let lvl88 = document.getElementById("ioj88");
let lvl89 = document.getElementById("wwe89");
let lvl90 = document.getElementById("hgb90");
let lvl91 = document.getElementById("oim91");
let lvl92 = document.getElementById("uib92");
let lvl93 = document.getElementById("mec93");
let lvl94 = document.getElementById("pnw94");
let lvl95 = document.getElementById("www95");
let lvl96 = document.getElementById("hcn96");
let lvl97 = document.getElementById("aps97");
let lvl98 = document.getElementById("qwe98");
let lvl99 = document.getElementById("env99");
let lvl100 = document.getElementById("oo100");
let end = document.getElementById("endgame");

let start = document.getElementById("start");
let lvls = document.getElementById("level-select");
let lvls2 = document.getElementById("lvls-p2");
let gmb = document.getElementById("gamebox");
var stp = 0;
/*
    BRYCE
    smZI()
    chZI()
    wiZI()
*/

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
    }
    let level = levels.indexOf(this);
    let game = levelsGame[level];
    lvls.style.display = "none";
    gmb.style.display = "block";
    game.style.display = 'block';
}
/*****************************/
function startgame() {
    start.style.display = "none";
    if (stp >= 1) {
        gmb.style.display = "block";
    } else {
        gmb.style.display = "block";
        lvl1.style.display = "block";
        stp =+ 1;
        document.getElementById('stgtxt').innerHTML = "> Back to Game";
        console.log(stp)
    }
}
/*****************************/
function lvl1Check() {
    let lvl1Input = document.getElementById("lvl1Input").value;
    if (lvl1Input === "friendship") {
        lvl1.style.display = "none";
        lvl2.style.display = "block";
        return true;
    } else {
        lvl1.style.display = "block";
        return false;
    };
};
function lvl2Check() {
    let lvl2Input = document.getElementById("lvl2Input").value;
    if (lvl2Input === "pancake") {
        lvl2.style.display = "none";
        lvl3.style.display = "block";
        return true;
    } else {
        lvl2.style.display = "block";
        return false;
    };
};
function lvl3Check() {
    let lvl3Input = document.getElementById("lvl3Input").value;
    if (lvl3Input === "fireman") {
        lvl3.style.display = "none";
        lvl4.style.display = "block";
        return true;
    } else {
        lvl3.style.display = "block";
        return false;
    };
};
function lvl4Check() {
    let lvl4Input = document.getElementById("lvl4Input").value;
    if (lvl4Input === "sunflower") {
        lvl4.style.display = "none";
        lvl5.style.display = "block";
        return true;
    } else {
        lvl4.style.display = "block";
        return false;
    };
};
function lvl5Check() {
    let lvl5Input = document.getElementById("lvl5Input").value;
    if (lvl5Input === "mailbox") {
        lvl5.style.display = "none";
        lvl6.style.display = "block";
        return true;
    } else {
        lvl5.style.display = "block";
        return false;
    };
};
function lvl6Check() {
    let lvl6Input = document.getElementById("lvl6Input").value;
    if (lvl6Input === "dragonfly") {
        lvl6.style.display = "none";
        lvl7.style.display = "block";
        return true;
    } else {
        lvl6.style.display = "block";
        return false;
    };
};
function lvl7Check() {
    let lvl7Input = document.getElementById("lvl7Input").value;
    if (lvl7Input === "earring") {
        lvl7.style.display = "none";
        lvl8.style.display = "block";
        return true;
    } else {
        lvl7.style.display = "block";
        return false;
    };
};
function lvl8Check() {
    let lvl8Input = document.getElementById("lvl8Input").value;
    if (lvl8Input === "cartwheel") {
        lvl8.style.display = "none";
        lvl9.style.display = "block";
        return true;
    } else {
        lvl8.style.display = "block";
        return false;
    };
};
function lvl9Check() {
    let lvl9Input = document.getElementById("lvl9Input").value;
    if (lvl9Input === "toothbrush") {
        lvl9.style.display = "none";
        lvl10.style.display = "block";
        return true;
    } else {
        lvl9.style.display = "block";
        return false;
    };
};
function lvl10Check() {
    let lvl10Input = document.getElementById("lvl10Input").value;
    if (lvl10Input === "honeymoon") {
        lvl10.style.display = "none";
        lvl11.style.display = "block";
        return true;
    } else {
        lvl10.style.display = "block";
        return false;
    };
};
function lvl11Check() {
    let lvl11Input = document.getElementById("lvl11Input").value;
    if (lvl11Input === "carpool") {
        lvl11.style.display = "none";
        lvl12.style.display = "block";
        return true;
    } else {
        lvl11.style.display = "block";
        return false;
    };
};
function lvl12Check() {
    let lvl12Input = document.getElementById("lvl12Input").value;
    if (lvl12Input === "fishnet") {
        lvl12.style.display = "none";
        lvl13.style.display = "block";
        return true;
    } else {
        lvl12.style.display = "block";
        return false;
    };
};
function lvl13Check() {
    let lvl13Input = document.getElementById("lvl13Input").value;
    if (lvl13Input === "anthill") {
        lvl13.style.display = "none";
        lvl14.style.display = "block";
        return true;
    } else {
        lvl13.style.display = "block";
        return false;
    };
};
function lvl14Check() {
    let lvl14Input = document.getElementById("lvl14Input").value;
    if ( (lvl14Input === "milk man") || (lvl14Input === "milkman") ) {
        lvl14.style.display = "none";
        lvl15.style.display = "block";
        return true;
    } else {
        lvl14.style.display = "block";
        return false;
    };
};
function lvl15Check() {
    let lvl15Input = document.getElementById("lvl15Input").value;
    if (lvl15Input === "bowtie") {
        lvl15.style.display = "none";
        lvl16.style.display = "block";
        return true;
    } else {
        lvl15.style.display = "block";
        return false;
    };
};
function lvl16Check() {
    let lvl16Input = document.getElementById("lvl16Input").value;
    if (lvl16Input === "fireproof") {
        lvl16.style.display = "none";
        lvl17.style.display = "block";
        return true;
    } else {
        lvl16.style.display = "block";
        return false;
    };
};
function lvl17Check() {
    let lvl17Input = document.getElementById("lvl17Input").value;
    if (lvl17Input === "campfire") {
        lvl17.style.display = "none";
        lvl18.style.display = "block";
        return true;
    } else {
        lvl17.style.display = "block";
        return false;
    };
};
function lvl18Check() {
    let lvl18Input = document.getElementById("lvl18Input").value;
    if (lvl18Input === "bluebird") {
        lvl18.style.display = "none";
        lvl19.style.display = "block";
        return true;
    } else {
        lvl18.style.display = "block";
        return false;
    };
};
function lvl19Check() {
    let lvl19Input = document.getElementById("lvl19Input").value;
    if (lvl19Input === "cupcake") {
        lvl19.style.display = "none";
        lvl20.style.display = "block";
        return true;
    } else {
        lvl19.style.display = "block";
        return false;
    };
};
function lvl20Check() {
    let lvl20Input = document.getElementById("lvl20Input").value;
    if (lvl20Input === "bullfrog") {
        lvl20.style.display = "none";
        lvl21.style.display = "block";
        return true;
    } else {
        lvl20.style.display = "block";
        return false;
    };
};
function lvl21Check() {
    let lvl21Input = document.getElementById("lvl21Input").value;
    if ( lvl21Input.includes("pigs") && lvl21Input.includes("three") ) {
        lvl21.style.display = "none";
        lvl22.style.display = "block";
        return true;
    } else {
        lvl21.style.display = "block";
        return false;
    };
};
function lvl22Check() {
    let lvl22Input = document.getElementById("lvl22Input").value;
    if ( lvl22Input.includes("puss") && lvl22Input.includes("boots") ) {
        lvl22.style.display = "none";
        lvl23.style.display = "block";
        return true;
    } else {
        lvl22.style.display = "block";
        return false;
    };
};
function lvl23Check() {
    let lvl23Input = document.getElementById("lvl23Input").value;
    if ( lvl23Input.includes("aladdin") ) {
        lvl23.style.display = "none";
        lvl24.style.display = "block";
        return true;
    } else {
        lvl23.style.display = "block";
        return false;
    };
};
function lvl24Check() {
    let lvl24Input = document.getElementById("lvl24Input").value;
    if ( lvl24Input.includes("tortoise") && lvl24Input.includes("hare") ) {
        lvl24.style.display = "none";
        lvl25.style.display = "block";
        return true;
    } else {
        lvl24.style.display = "block";
        return false;
    };
};
function lvl25Check() {
    let lvl25Input = document.getElementById("lvl25Input").value;
    if ( lvl25Input.includes("little") && lvl25Input.includes("mermaid") ) {
        lvl25.style.display = "none";
        lvl26.style.display = "block";
        return true;
    } else {
        lvl25.style.display = "block";
        return false;
    };
};
function lvl26Check() {
    let lvl26Input = document.getElementById("lvl26Input").value;
    if ( lvl26Input.includes("red") && lvl26Input.includes("riding") && lvl26Input.includes("hood") ) {
        lvl26.style.display = "none";
        lvl27.style.display = "block";
        return true;
    } else {
        lvl26.style.display = "block";
        return false;
    };
};
function lvl27Check() {
    let lvl27Input = document.getElementById("lvl27Input").value;
    if ( lvl27Input.includes("goldilocks") || lvl27Input.includes("three")|| lvl27Input.includes("bears") ) {
        lvl27.style.display = "none";
        lvl28.style.display = "block";
        return true;
    } else {
        lvl27.style.display = "block";
        return false;
    };
};
function lvl28Check() {
    let lvl28Input = document.getElementById("lvl28Input").value;
    if ( lvl28Input.includes("snow") && lvl28Input.includes("white") ) {
        lvl28.style.display = "none";
        lvl29.style.display = "block";
        return true;
    } else {
        lvl28.style.display = "block";
        return false;
    };
};
function lvl29Check() {
    let lvl29Input = document.getElementById("lvl29Input").value;
    if ( lvl29Input.includes("ugly") && lvl29Input.includes("duckling") ) {
        lvl29.style.display = "none";
        lvl30.style.display = "block";
        return true;
    } else {
        lvl29.style.display = "block";
        return false;
    };
};
function lvl30Check() {
    let lvl30Input = document.getElementById("lvl30Input").value;
    if ( lvl30Input.includes("beauty") && lvl30Input.includes("beast") ) {
        lvl30.style.display = "none";
        lvl31.style.display = "block";
        return true;
    } else {
        lvl30.style.display = "block";
        return false;
    };
};
function lvl31Check() {
    let lvl31Input = document.getElementById("lvl31Input").value;
    if (lvl31Input === "cinderella" ) {
        lvl31.style.display = "none";
        lvl32.style.display = "block";
        return true;
    } else {
        lvl31.style.display = "block";
        return false;
    };
};
function lvl32Check() {
    let lvl32Input = document.getElementById("lvl32Input").value;
    if (lvl32Input.includes("hansel") && lvl32Input.includes("gretel") ) {
        lvl32.style.display = "none";
        lvl33.style.display = "block";
        return true;
    } else {
        lvl32.style.display = "block";
        return false;
    };
};
function lvl33Check() {
    let lvl33Input = document.getElementById("lvl33Input").value;
    if (lvl33Input === "sleeping beauty" ) {
        lvl33.style.display = "none";
        lvl34.style.display = "block";
        return true;
    } else {
        lvl33.style.display = "block";
        return false;
    };
};
function lvl34Check() {
    let lvl34Input = document.getElementById("lvl34Input").value;
    if (lvl34Input.includes("princess") || lvl34Input.includes("frog") ) {
        lvl34.style.display = "none";
        lvl35.style.display = "block";
        return true;
    } else {
        lvl34.style.display = "block";
        return false;
    };
};
function lvl35Check() {
    let lvl35Input = document.getElementById("lvl35Input").value;
    if (lvl35Input === "turn up the music") {
        lvl35.style.display = "none";
        lvl36.style.display = "block";
        return true;
    } else {
        lvl35.style.display = "block";
        return false;
    };
};
function lvl36Check() {
    let lvl36Input = document.getElementById("lvl36Input").value;
    if ( lvl36Input.includes("baby") && lvl36Input.includes("cold") && lvl36Input.includes("outside") ) {
        lvl36.style.display = "none";
        lvl37.style.display = "block";
        return true;
    } else {
        lvl36.style.display = "block";
        return false;
    };
};
function lvl37Check() {
    let lvl37Input = document.getElementById("lvl37Input").value;
    if ( lvl37Input.includes("no") && ( (lvl37Input.includes("photos")) || (lvl37Input.includes("pictures")) ) ) {
        lvl37.style.display = "none";
        lvl38.style.display = "block";
        return true;
    } else {
        lvl37.style.display = "block";
        return false;
    };
};
function lvl38Check() {
    let lvl38Input = document.getElementById("lvl38Input").value;
    if ( lvl38Input.includes("accessible") && ( (lvl38Input.includes("handicap")) || (lvl38Input.includes("wheelchair")) ) ) {
        lvl38.style.display = "none";
        lvl39.style.display = "block";
        return true;
    } else {
        lvl38.style.display = "block";
        return false;
    };
};
function lvl39Check() {
    let lvl39Input = document.getElementById("lvl39Input").value;
    if ( lvl39Input==="free wifi" ) {
        lvl39.style.display = "none";
        lvl40.style.display = "block";
        return true;
    } else {
        lvl39.style.display = "block";
        return false;
    };
};
function lvl40Check() {
    let lvl40Input = document.getElementById("lvl40Input").value;
    if (lvl40Input === "rock on") {
        lvl40.style.display = "none";
        lvl41.style.display = "block";
        return true;
    } else {
        lvl40.style.display = "block";
        return false;
    };
};
function lvl41Check() {
    let lvl41Input = document.getElementById("lvl41Input").value;
    if (lvl41Input === "i believe you") {
        lvl41.style.display = "none";
        lvl42.style.display = "block";
        return true;
    } else {
        lvl41.style.display = "block";
        return false;
    };
};
function lvl42Check() {
    let lvl42Input = document.getElementById("lvl42Input").value;
    if (lvl42Input.includes("music") && (lvl42Input.includes("ear") || lvl42Input.includes("ears")) ) {
        lvl42.style.display = "none";
        lvl43.style.display = "block";
        return true;
    } else {
        lvl42.style.display = "block";
        return false;
    };
};
function lvl43Check() {
    let lvl43Input = document.getElementById("lvl43Input").value;
    if (lvl43Input.includes("blessed") ) {
        lvl43.style.display = "none";
        lvl44.style.display = "block";
        return true;
    } else {
        lvl43.style.display = "block";
        return false;
    };
};
function lvl44Check() {
    let lvl44Input = document.getElementById("lvl44Input").value;
    if (lvl44Input === "happy halloween") {
        lvl44.style.display = "none";
        lvl45.style.display = "block";
        return true;
    } else {
        lvl44.style.display = "block";
        return false;
    };
};
function lvl45Check() {
    let lvl45Input = document.getElementById("lvl45Input").value;
    if (lvl45Input === "i love pizza") {
        lvl45.style.display = "none";
        lvl46.style.display = "block";
        return true;
    } else {
        lvl45.style.display = "block";
        return false;
    };
};
function lvl46Check() {
    let lvl46Input = document.getElementById("lvl46Input").value;
    if (lvl46Input.includes("night") && lvl46Input.includes("out") && (lvl46Input.includes("girl") || lvl46Input.includes("girls")) ) {
        lvl46.style.display = "none";
        lvl47.style.display = "block";
        return true;
    } else {
        lvl46.style.display = "block";
        return false;
    };
};
function lvl47Check() {
    let lvl47Input = document.getElementById("lvl47Input").value;
    if (lvl47Input.includes("news") && (lvl47Input.includes("hear") || lvl47Input.includes("heard")) ) {
        lvl47.style.display = "none";
        lvl48.style.display = "block";
        return true;
    } else {
        lvl47.style.display = "block";
        return false;
    };
};
function lvl48Check() {
    let lvl48Input = document.getElementById("lvl48Input").value;
    if (lvl48Input.includes("cross") && lvl48Input.includes("heart") ) {
        lvl48.style.display = "none";
        lvl49.style.display = "block";
        return true;
    } else {
        lvl48.style.display = "block";
        return false;
    };
};
function lvl49Check() {
    let lvl49Input = document.getElementById("lvl49Input").value;
    if ( (lvl49Input.includes("time") || lvl49Input.includes("time's")) && (lvl49Input.includes("run") || (lvl49Input.includes("running")) || (lvl49Input.includes("ran"))) && lvl49Input.includes("out")) {
        lvl49.style.display = "none";
        lvl50.style.display = "block";
        return true;
    } else {
        lvl49.style.display = "block";
        return false;
    };
};
function lvl50Check() {
    let lvl50Input = document.getElementById("lvl50Input").value;
    if (lvl50Input === "oh my god") {
        lvl50.style.display = "none";
        lvl51.style.display = "block";
        return true;
    } else {
        lvl50.style.display = "block";
        return false;
    };
}; 
function lvl51Check() {
    let lvl51Input = document.getElementById("lvl51Input").value;
    if ( (lvl51Input.includes("stop") || lvl51Input.includes("don't")) && lvl51Input.includes("monkey")) {
        lvl51.style.display = "none";
        lvl52.style.display = "block";
        return true;
    } else {
        lvl51.style.display = "block";
        return false;
    };
};
function lvl52Check() {
    let lvl52Input = document.getElementById("lvl52Input").value;
    if (lvl52Input === "we come in peace") {
        lvl52.style.display = "none";
        lvl53.style.display = "block";
        return true;
    } else {
        lvl52.style.display = "block";
        return false;
    };
};
function lvl53Check() {
    let lvl53Input = document.getElementById("lvl53Input").value;
    if (lvl53Input === "happy birthday") {
        lvl53.style.display = "none";
        lvl54.style.display = "block";
        return true;
    } else {
        lvl53.style.display = "block";
        return false;
    };
};
function lvl54Check() {
    let lvl54Input = document.getElementById("lvl54Input").value;
    if (lvl54Input.includes("build") && lvl54Input.includes("snow") ) {
        lvl54.style.display = "none";
        lvl55.style.display = "block";
        return true;
    } else {
        lvl54.style.display = "block";
        return false;
    };
};
function lvl55Check() {
    let lvl55Input = document.getElementById("lvl55Input").value;
    if (lvl55Input.includes("under") && lvl55Input.includes("water") && lvl55Input.includes("bridge") ) {
        lvl55.style.display = "none";
        lvl56.style.display = "block";
        return true;
    } else {
        lvl55.style.display = "block";
        return false;
    };
};
function lvl56Check() {
    let lvl56Input = document.getElementById("lvl56Input").value;
    if (lvl56Input.includes("piece") && lvl56Input.includes("cake")) {
        lvl56.style.display = "none";
        lvl57.style.display = "block";
        return true;
    } else {
        lvl56.style.display = "block";
        return false;
    };
};
function lvl57Check() {
    let lvl57Input = document.getElementById("lvl57Input").value;
    if (lvl57Input.includes("old") && lvl57Input.includes("news") ) {
        lvl57.style.display = "none";
        lvl58.style.display = "block";
        return true;
    } else {
        lvl57.style.display = "block";
        return false;
    };
};
function lvl58Check() {
    let lvl58Input = document.getElementById("lvl58Input").value;
    if (lvl58Input.includes("break") && lvl58Input.includes("ice")) {
        lvl58.style.display = "none";
        lvl59.style.display = "block";
        return true;
    } else {
        lvl58.style.display = "block";
        return false;
    };
};
function lvl59Check() {
    let lvl59Input = document.getElementById("lvl59Input").value;
    if (lvl59Input.includes("french") && lvl59Input.includes("kiss") ) {
        lvl59.style.display = "none";
        lvl60.style.display = "block";
        return true;
    } else {
        lvl59.style.display = "block";
        return false;
    };
};
function lvl60Check() {
    let lvl60Input = document.getElementById("lvl60Input").value;
    if (lvl60Input.includes("love") && lvl60Input.includes("bird")) {
        lvl60.style.display = "none";
        lvl61.style.display = "block";
        return true;
    } else {
        lvl60.style.display = "block";
        return false;
    };
};
function lvl61Check() {
    let lvl61Input = document.getElementById("lvl61Input").value;
    if (lvl61Input === "starbucks") {
        lvl61.style.display = "none";
        lvl62.style.display = "block";
        return true;
    } else {
        lvl61.style.display = "block";
        return false;
    };
};
function lvl62Check() {
    let lvl62Input = document.getElementById("lvl62Input").value;
    if (lvl62Input === "burger king") {
        lvl62.style.display = "none";
        lvl63.style.display = "block";
        return true;
    } else {
        lvl62.style.display = "block";
        return false;
    };
};
function lvl63Check() {
    let lvl63Input = document.getElementById("lvl63Input").value;
    if (lvl63Input.includes("cowboy") ) {
        lvl63.style.display = "none";
        lvl64.style.display = "block";
        return true;
    } else {
        lvl63.style.display = "block";
        return false;
    };
};
function lvl64Check() {
    let lvl64Input = document.getElementById("lvl64Input").value;
    if (lvl64Input === "cookie monster") {
        lvl64.style.display = "none";
        lvl65.style.display = "block";
        return true;
    } else {
        lvl64.style.display = "block";
        return false;
    };
};
function lvl65Check() {
    let lvl65Input = document.getElementById("lvl65Input").value;
    if (lvl65Input === "queen bee") {
        lvl65.style.display = "none";
        lvl66.style.display = "block";
        return true;
    } else {
        lvl65.style.display = "block";
        return false;
    };
};
function lvl66Check() {
    let lvl66Input = document.getElementById("lvl66Input").value;
    if (lvl66Input === "pumpkin pie") {
        lvl66.style.display = "none";
        lvl67.style.display = "block";
        return true;
    } else {
        lvl66.style.display = "block";
        return false;
    };
};
function lvl67Check() {
    let lvl67Input = document.getElementById("lvl67Input").value;
    if (lvl67Input === "corndog") {
        lvl67.style.display = "none";
        lvl68.style.display = "block";
        return true;
    } else {
        lvl67.style.display = "block";
        return false;
    };
};
function lvl68Check() {
    let lvl68Input = document.getElementById("lvl68Input").value;
    if (lvl68Input === "apple tv") {
        lvl68.style.display = "none";
        lvl69.style.display = "block";
        return true;
    } else {
        lvl68.style.display = "block";
        return false;
    };
};
function lvl69Check() {
    let lvl69Input = document.getElementById("lvl69Input").value;
    if (lvl69Input === "killer whale") {
        lvl69.style.display = "none";
        lvl70.style.display = "block";
        return true;
    } else {
        lvl69.style.display = "block";
        return false;
    };
};
function lvl70Check() {
    let lvl70Input = document.getElementById("lvl70Input").value;
    if (lvl70Input === "rainbow") {
        lvl70.style.display = "none";
        lvl71.style.display = "block";
        return true;
    } else {
        lvl70.style.display = "block";
        return false;
    };
};
function lvl71Check() {
    let lvl71Input = document.getElementById("lvl71Input").value;
    if (lvl71Input.includes("head") && lvl71Input.includes("light")) {
        lvl71.style.display = "none";
        lvl72.style.display = "block";
        return true;
    } else {
        lvl71.style.display = "block";
        return false;
    };
};
function lvl72Check() {
    let lvl72Input = document.getElementById("lvl72Input").value;
    if (lvl72Input === "wheelchair") {
        lvl72.style.display = "none";
        lvl73.style.display = "block";
        return true;
    } else {
        lvl72.style.display = "block";
        return false;
    };
};
function lvl73Check() {
    let lvl73Input = document.getElementById("lvl73Input").value;
    if (lvl73Input.includes("spiderman")) {
        lvl73.style.display = "none";
        lvl74.style.display = "block";
        return true;
    } else {
        lvl73.style.display = "block";
        return false;
    };
};
function lvl74Check() {
    let lvl74Input = document.getElementById("lvl74Input").value;
    if (lvl74Input.includes("twd") || (lvl74Input.includes("walking") && lvl74Input.includes("dead"))) {
        lvl74.style.display = "none";
        lvl75.style.display = "block";
        return true;
    } else {
        lvl74.style.display = "block";
        return false;
    };
};
function lvl75Check() {
    let lvl75Input = document.getElementById("lvl75Input").value;
    if (lvl75Input.includes("it")) {
        lvl75.style.display = "none";
        lvl76.style.display = "block";
        return true;
    } else {
        lvl75.style.display = "block";
        return false;
    };
};
function lvl76Check() {
    let lvl76Input = document.getElementById("lvl76Input").value;
    if (lvl76Input === "i love lucy") {
        lvl76.style.display = "none";
        lvl77.style.display = "block";
        return true;
    } else {
        lvl76.style.display = "block";
        return false;
    };
};
function lvl77Check() {
    let lvl77Input = document.getElementById("lvl77Input").value;
    if (lvl77Input === "buffy the vampire slayer") {
        lvl77.style.display = "none";
        lvl78.style.display = "block";
        return true;
    } else {
        lvl77.style.display = "block";
        return false;
    };
};
function lvl78Check() {
    let lvl78Input = document.getElementById("lvl78Input").value;
    if (lvl78Input.includes("wizard of oz")) {
        lvl78.style.display = "none";
        lvl79.style.display = "block";
        return true;
    } else {
        lvl78.style.display = "block";
        return false;
    };
};
function lvl79Check() {
    let lvl79Input = document.getElementById("lvl79Input").value;
    if (lvl79Input.includes("godzilla")) {
        lvl79.style.display = "none";
        lvl80.style.display = "block";
        return true;
    } else {
        lvl79.style.display = "block";
        return false;
    };
};
function lvl80Check() {
    let lvl80Input = document.getElementById("lvl80Input").value;
    if (lvl80Input === "africa") {
        lvl80.style.display = "none";
        lvl81.style.display = "block";
        return true;
    } else {
        lvl80.style.display = "block";
        return false;
    };
};
function lvl81Check() {
    let lvl81Input = document.getElementById("lvl81Input").value;
    if (lvl81Input === "north america") {
        lvl81.style.display = "none";
        lvl82.style.display = "block";
        return true;
    } else {
        lvl81.style.display = "block";
        return false;
    };
};
function lvl82Check() {
    let lvl82Input = document.getElementById("lvl82Input").value;
    if (lvl82Input === "asia") {
        lvl82.style.display = "none";
        lvl81.style.display = "block";
        return true;
    } else {
        lvl82.style.display = "block";
        return false;
    };
};
function lvl83Check() {
    let lvl83Input = document.getElementById("lvl83Input").value;
    if (lvl83Input === "europe") {
        lvl83.style.display = "none";
        lvl84.style.display = "block";
        return true;
    } else {
        lvl83.style.display = "block";
        return false;
    };
};
function lvl84Check() {
    let lvl84Input = document.getElementById("lvl84Input").value;
    if (lvl84Input === "south america") {
        lvl84.style.display = "none";
        lvl85.style.display = "block";
        return true;
    } else {
        lvl84.style.display = "block";
        return false;
    };
};
function lvl85Check() {
    let lvl85Input = document.getElementById("lvl85Input").value;
    if (lvl85Input === "anartica") {
        lvl85.style.display = "none";
        lvl86.style.display = "block";
        return true;
    } else {
        lvl85.style.display = "block";
        return false;
    };
};
function lvl86Check() {
    let lvl86Input = document.getElementById("lvl86Input").value;
    if (lvl86Input === "australia") {
        lvl86.style.display = "none";
        lvl87.style.display = "block";
        return true;
    } else {
        lvl86.style.display = "block";
        return false;
    };
};
function lvl87Check() {
    let lvl87Input = document.getElementById("lvl87Input").value;
    if (lvl87Input.includes("chinese") && lvl87Input.includes("year")) {
        lvl87.style.display = "none";
        lvl88.style.display = "block";
        return true;
    } else {
        lvl87.style.display = "block";
        return false;
    };
};
function lvl88Check() {
    let lvl88Input = document.getElementById("lvl88Input").value;
    if (lvl88Input.includes("hanukkah")) {
        lvl88.style.display = "none";
        lvl89.style.display = "block";
        return true;
    } else {
        lvl88.style.display = "block";
        return false;
    };
};
function lvl89Check() {
    let lvl89Input = document.getElementById("lvl89Input").value;
    if (lvl89Input.includes("marriage") || lvl89Input.includes("wed") ) {
        lvl89.style.display = "none";
        lvl90.style.display = "block";
        return true;
    } else {
        lvl89.style.display = "block";
        return false;
    };
};
function lvl90Check() {
    let lvl90Input = document.getElementById("lvl90Input").value;
    if (lvl90Input.includes("easter")) {
        lvl90.style.display = "none";
        lvl91.style.display = "block";
        return true;
    } else {
        lvl90.style.display = "block";
        return false;
    };
};
function lvl91Check() {
    let lvl91Input = document.getElementById("lvl91Input").value;
    if (lvl91Input.includes("ramadan")) {
        lvl91.style.display = "none";
        lvl92.style.display = "block";
        return true;
    } else {
        lvl91.style.display = "block";
        return false;
    };
};
function lvl92Check() {
    let lvl92Input = document.getElementById("lvl92Input").value;
    if (lvl92Input === ("earth day")) {
        lvl92.style.display = "none";
        lvl93.style.display = "block";
        return true;
    } else {
        lvl92.style.display = "block";
        return false;
    };
};
function lvl93Check() {
    let lvl93Input = document.getElementById("lvl93Input").value;
    if (lvl93Input.includes("diwali")) {
        lvl93.style.display = "none";
        lvl94.style.display = "block";
        return true;
    } else {
        lvl93.style.display = "block";
        return false;
    };
};
function lvl94Check() {
    let lvl94Input = document.getElementById("lvl94Input").value;
    if (lvl94Input.includes("day") && lvl94Input.includes("dead") ) {
        lvl94.style.display = "none";
        lvl95.style.display = "block";
        return true;
    } else {
        lvl94.style.display = "block";
        return false;
    };
};
function lvl95Check() {
    let lvl95Input = document.getElementById("lvl95Input").value;
    if (lvl95Input.includes("apple")) {
        lvl95.style.display = "none";
        lvl96.style.display = "block";
        return true;
    } else {
        lvl95.style.display = "block";
        return false;
    };
};
function lvl96Check() {
    let lvl96Input = document.getElementById("lv96Input").value;
    if (lvl96Input.includes("chik") && lvl96Input.includes("fil")) {
        lvl96.style.display = "none";
        lvl97.style.display = "block";
        return true;
    } else {
        lvl96.style.display = "block";
        return false;
    };
};
function lvl97Check() {
    let lvl97Input = document.getElementById("lvl97Input").value;
    if (lvl97Input.includes("donald")) {
        lvl97.style.display = "none";
        lvl98.style.display = "block";
        return true;
    } else {
        lvl97.style.display = "block";
        return false;
    };
};
function lvl98Check() {
    let lvl98Input = document.getElementById("lvl98Input").value;
    if (lvl98Input.includes("amazon")) {
        lvl98.style.display = "none";
        lvl99.style.display = "block";
        return true;
    } else {
        lvl98.style.display = "block";
        return false;
    };
};
function lvl99Check() {
    let lvl99Input = document.getElementById("lvl99Input").value;
    if (lvl99Input.includes("sprint")) {
        lvl99.style.display = "none";
        lvl100.style.display = "block";
        return true;
    } else {
        lvl99.style.display = "block";
        return false;
    };
};
function lvl100Check() {
    let lvl100Input = document.getElementById("lvl100Input").value;
    if (lvl100Input.includes("microsoft") || lvl100Input.includes("windows") ) {
        lvl100.style.display = "none";
        lvlend.style.display = "block";
        return true;
    } else {
        lvl100.style.display = "block";
        return false;
    };
};