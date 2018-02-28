let background = document.getElementById("background");
let lightswitch = document.getElementById("lightswitch");
let body = document.getElementById("body");

var count = 1;

button.addEventListener("click", function() {
	if (count % 2 != 0) {
		lightswitch.style.float = "left";
		body.style.background = "white";
		document.getElementById("button").innerHTML = "On";
		count++;
	}
	else {
		lightswitch.style.float = "right";
		body.style.background = "black";
		count++;
		document.getElementById("button").innerHTML = "Off";
	}
	
})