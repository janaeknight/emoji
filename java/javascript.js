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
/*function lvl-Check() {
    let lvl-Input = document.getElementById("lvl-Input").value;
    if (lvl-Input === "") {
        lvl-.style.display = "none";
        lvl-.style.display = "block";
        return true;
    } else {
        lvl-.style.display = "block";
        return false;
    };
};*/