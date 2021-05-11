"use strict";

let buttonOne = document.getElementById("button-one");
let buttonTwo = document.getElementById("button-two");
let buttonThree = document.getElementById("button-three");

let img1 = document.getElementById("img1");
let img2 = document.getElementById("img2");
let img3 = document.getElementById("img3");
let img4 = document.getElementById("img4");

buttonOne.onclick = function () {
  buttonOne.style.background = "#c99";
  buttonTwo.style.background = "#b9bbbd";
  buttonThree.style.background = "#b9bbbd";

  img1.src = "imgs/gallery-item-01.jpg";
  img2.src = "imgs/gallery-item-02.jpg";
  img3.src = "imgs/gallery-item-03.jpg";
  img4.src = "imgs/gallery-item-04.jpg";
};
buttonTwo.onclick = function () {
  buttonOne.style.background = "#b9bbbd";
  buttonTwo.style.background = "#c99";
  buttonThree.style.background = "#b9bbbd";

  img1.src = "imgs/gallery-item-03.jpg";
  img2.src = "imgs/gallery-item-04.jpg";
  img3.src = "imgs/gallery-item-05.jpg";
  img4.src = "imgs/gallery-item-06.jpg";
};
buttonThree.onclick = function () {
  buttonOne.style.background = "#b9bbbd";
  buttonTwo.style.background = "#b9bbbd";
  buttonThree.style.background = "#c99";

  img1.src = "imgs/gallery-item-05.jpg";
  img2.src = "imgs/gallery-item-06.jpg";
  img3.src = "imgs/gallery-item-07.jpg";
  img4.src = "imgs/gallery-item-08.jpg";
};
