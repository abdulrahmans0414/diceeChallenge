// Get the roll button element by ID
var rollButton = document.getElementById("roll-button");
// Add an event listener for the button click event
rollButton.addEventListener("click", function() {

    // Generate random numbers for dice images
var randomNumber1 =Math.floor(Math.random()*6) +1; // random number between 1 and 6
var randomDiceImage = "dice"+randomNumber1 +".png"; //dice1.png to dice6.png

// Construct the image source paths
var randomImageSource = "images/"+randomDiceImage; // images/dice1.png to images/dice6.png

  // Update the dice images
var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


// for second image
var randomNumber2 =Math.floor(Math.random()*6) +1; 

var randomImageSource2= "images/dice"+randomNumber2 + ".png"; 

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


 // Determine the winner and display the result
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins !";
}
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins !";

}
else{
    document.querySelector("h1").innerHTML = "Draw !";
}

});
