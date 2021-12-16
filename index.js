// for dice one

let randomNumber1 = Math.floor(Math.random() * 6) + 1;
let imageRandom1 = "images/dice" + randomNumber1 + ".png"; //images/dice1.png - images/dice6.png
let image1 = document.querySelectorAll("img")[0]; //selecting attribute by tag name
image1.setAttribute("src", imageRandom1); // changing attribute
// note imageRandom is already a string

// for dice two

let randomNumber2 = Math.floor(Math.random() * 6) + 1;
let imageRandom2 = "images/dice" + randomNumber2 + ".png";
let image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imageRandom2);

// conditions to win game

// selecting h1 tag
let heading = document.querySelector("h1");
// changing h1 according to conditions
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Jack Wins";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Rose Wins";
} else {
  heading.innerHTML = "Draw";
}
