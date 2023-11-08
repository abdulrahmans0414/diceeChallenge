var randomNumber1 =Math.floor(Math.random()*6) +1; // random number between 1 and 6

var randomDiceImage = "dice"+randomNumber1 +".png"; //dice1.png to dice6.png

var randomImageSource = "images/"+randomDiceImage; // images/dice1.png to images/dice6.png

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src",randomImageSource);


// for second image
var randomNumber2 =Math.floor(Math.random()*6) +1; 

var randomImageSource2= "images/dice"+randomNumber2 + ".png"; 

var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);