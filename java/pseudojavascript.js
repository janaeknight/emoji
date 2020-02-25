// Window UI

$(".window").addClass("ui-widget-content"); // <-- drag class (REQ.)
$(function() { $(".window").draggable(); }); // <!--- makes windows draggable

$(".window").on("click", function() {
    $(".window").removeClass("activeZ");
    $(this).addClass("activeZ");
});