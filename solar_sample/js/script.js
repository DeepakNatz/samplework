$(document).ready(function () {
$("#switch").click(function () {
    if ($("#fullpage").hasClass("night")) {
        $("#fullpage").removeClass("night");
        $("#switch").removeClass("switched");
    }
    else {
        $("#fullpage").addClass("night");
        $("#switch").addClass("switched");

    }
});

    $( "#draggable1, #draggable2, #draggable3" ).draggable();

});