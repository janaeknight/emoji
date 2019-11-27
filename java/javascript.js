let lvl1 = document.getElementById("wrwc1");
let lvl2 = document.getElementById("dbap2");
// let lvl = document.getElementById("");
// let lvl = document.getElementById("");
// let lvl = document.getElementById("");
// let lvl = document.getElementById("");
// let lvl = document.getElementById("");
// let lvl = document.getElementById("");
// let lvl = document.getElementById("");
// let lvl = document.getElementById("");

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