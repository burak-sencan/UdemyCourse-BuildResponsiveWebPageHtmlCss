"use strict";
/* for Note 3 Section animated div section */
const parent = document.getElementById("note3ParentBox");
const child = document.getElementById("note3ChildBox");
const Note3SpanTop = document.getElementById("Note3SpanTop");
const Note3SpanLeft = document.getElementById("Note3SpanLeft");

const interval = setInterval(changePosition, 1000);

let topProperty;
let leftProperty;

function changePosition() {
  topProperty = getRandomNum();
  leftProperty = getRandomNum();

  child.style.top = topProperty + "px";
  child.style.left = leftProperty + "px";

  Note3SpanTop.innerText = child.style.top;
  Note3SpanLeft.innerText = child.style.left;
}

function getRandomNum() {
  return Math.floor(Math.random() * 200 + 100);
}
