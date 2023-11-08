var randomNumber1 =Math.floor(Math.random()*6) +1; // random number between 1 and 6

var randomDiceImage = "dice"+randomNumber1 +".png"; //dice1.png to dice6.png

var randomImageSource = "images/"+randomDiceImage; // images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


// for second image
var randomNumber2 =Math.floor(Math.random()*6) +1; 

var randomImageSource2= "images/dice"+randomNumber2 + ".png"; 

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);


// create a message to show greater numbers of dice
// player 1 wins
if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "player 1 wins!";
}
// player 2 wins
else if (randomNumber2>randomNumber1) {
    document.querySelector("h1").innerHTML = "player 2 wins!";

}
// display draw
else{
    document.querySelector("h1").innerHTML = "Draw !";
}