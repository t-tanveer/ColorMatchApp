


//select all square classes
var countSquares= 6;
var colors = generateColors(countSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var h1 = document.querySelector("h1");
var messageDisplay = document.getElementById("messageDisplay");
var resetButton = document.querySelector("#reset");
var easyButton = document.querySelector("#easyBtn");
var hardButton = document.querySelector("#hardBtn");



easyButton.addEventListener("click", function() {
	countSquares = 3;
hardBtn.classList.remove("selected");
easyBtn.classList.add("selected");
colors = generateColors(countSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i <squares.length; i++) {
	if (colors[i]){
		squares[i].style.backgroundColor = colors[i];
	} else {
		squares[i].style.display = "none";
	}
}
});

hardButton.addEventListener("click", function() {
	countSquares = 6;
hardBtn.classList.add("selected");
easyBtn.classList.remove("selected");
colors = generateColors(countSquares);
pickedColor = pickColor();
colorDisplay.textContent = pickedColor;

for (var i = 0; i <squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];
	squares[i].style.display = "block";
}
});



resetButton.addEventListener("click", function() {
	colors = generateColors(countSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent ="";
	this.textContent = "New Colors";

for (var i = 0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];}

h1.style.backgroundColor = "steelblue";
})


colorDisplay.textContent = pickedColor;

//set color for squares
for (var i = 0; i<squares.length; i++) {
	squares[i].style.backgroundColor = colors[i];

	//adding click listeners to squares
	squares[i].addEventListener("click", function() {

		//store color of clicked square
		var clickedColor = this.style.backgroundColor;

		//check for match
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "Correct!"
			h1.style.backgroundColor = clickedColor;
			changeAll(clickedColor);
			resetButton.textContent = "Play again?";			
		} else{
			messageDisplay.textContent = "Try again :( !"
			this.style.background = "#232323";
		}
		
	});


}


function changeAll(color){
//change all the squares to pickedColor after correct guess  
	for(var i = 0; i<squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}


function pickColor(){
//pick a random color from the list of colors
	var randoms = Math.floor(Math.random() * colors.length);
	return colors[randoms];
}

function generateColors(count) {
	//make an array
	var array = []
	// repeat count times
	for (i = 0; i<count; i++) {
		//get random colour and add into array
		array.push(randomColor());
	}
	//return that array at end
	return array;
}

function randomColor(){
//generate a random rgb
	var red = Math.floor(Math.random() * 256)
	var green = Math.floor(Math.random() * 256)
	var blue = Math.floor(Math.random() * 256)
	return("rgb(" + red +", " + green + ", " + blue + ")");
}