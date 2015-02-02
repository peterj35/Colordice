//lets display the current time
var color;

function displayTime() {
	color = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	//color = "#"+"ff"+s+s;
	//set background color
	document.body.style.background = color;
	//set time
	document.getElementById("hex").innerHTML = color;
}

//call the function
document.getElementById("button").onclick = function(){displayTime()};

displayTime();



