$(function () {
    lightFunction();
});

function lightFunction(){
    var lightOn = true;
    $("#button").on("click", function () {
        lightOn = !lightOn;
        if (lightOn) {
            $("#switch").text("On");
            $("#switch").css({"float": "left"});
            $("body").css({"background-color": "white"});
        }
        else {
            $("#switch").text("Off");
            $("#switch").css({"float": "right"});
            $("body").css({"background-color": "black"});
        }
    });
}