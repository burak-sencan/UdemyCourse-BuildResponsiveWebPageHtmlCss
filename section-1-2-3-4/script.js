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



/* for Note 4 Section animated div section */
const note4leftdiv = document.getElementById("note4LeftDiv");
const note4rightdiv = document.getElementById("note4RightDiv");
const note4leftP = document.getElementById("note4LeftPDiv");
const note4rightP = document.getElementById("note4RightPDiv");
const note4RightContent = document.getElementById("note4RightContent");
console.log(note4RightContent);
let note4leftdivW = 250;
let note4RightContentW = 150;
let increase = true;

const interval2 = setInterval(changeWidth, 80);
function changeWidth() {
  if (note4leftdivW === 300) {
    increase = false;
  } else if (note4leftdivW === 250) {
    increase = true;
  }

  if (increase) {
    note4leftdivW++;
    note4RightContentW++;
    note4leftdiv.style.width = note4leftdivW + "px";
    note4leftdiv.style.height = note4leftdivW + "px";
    note4leftP.innerText = `Total Width: ${note4leftdivW}px`;

    note4RightContent.style.width = note4RightContentW + "px";
    note4RightContent.style.height = note4RightContentW + "px";
    note4rightP.innerText = `Content Width: ${note4leftdivW}px`;
  } else {
    note4leftdivW--;
    note4RightContentW--;
    note4leftdiv.style.width = note4leftdivW + "px";
    note4leftdiv.style.height = note4leftdivW + "px";
    note4leftP.innerText = `Total Width: ${note4leftdivW}px`;

    note4RightContent.style.width = note4RightContentW + "px";
    note4RightContent.style.height = note4RightContentW + "px";
    note4rightP.innerText = `Content Width: ${note4leftdivW}px`;
  }
}


/* For note5 button event*/