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
const note5buttons = document.querySelectorAll(".note5Btn");
const flexBox = document.getElementById("note5FlexBox");
const note5Input = document.getElementById("note5Input");
const note5InputGap = document.getElementById("note5InputGap");

note5Input.addEventListener("change", () => {
  flexBox.style.gap = `${note5Input.value}px`;
  note5InputGap.innerText = `${note5Input.value}px`;
});

note5buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    clearActive(idx);
    changeFlexProperty(idx, button);
    note5buttons[idx].classList.add("note5ActiveBtn");
  });
});

function clearActive(idx) {
  /*0,1,2,3,4,5 => justfy-content */
  if (idx >= 0 && idx <= 5) {
    for (let i = 0; i <= 5; i++)
      note5buttons[i].classList.remove("note5ActiveBtn");
  } else if (idx >= 6 && idx <= 10) {
    /*6,7,8,9,10 => align-items */
    for (let i = 6; i <= 10; i++)
      note5buttons[i].classList.remove("note5ActiveBtn");
  } else if (idx >= 11 && idx <= 14) {
    /*11,12,13,14 => flex-direction */
    for (let i = 11; i <= 14; i++)
      note5buttons[i].classList.remove("note5ActiveBtn");
  }
}

function changeFlexProperty(idx, button) {
  switch (idx) {
    case 0:
      flexBox.style.justifyContent = "flex-start";
      break;
    case 1:
      flexBox.style.justifyContent = "flex-end";
      break;
    case 2:
      flexBox.style.justifyContent = "center";
      break;
    case 3:
      flexBox.style.justifyContent = "space-between";
      break;
    case 4:
      flexBox.style.justifyContent = "space-around";
      break;
    case 5:
      flexBox.style.justifyContent = "space-evenly";
      break;
    case 6:
      flexBox.style.alignItems = "stretch";
      break;
    case 7:
      flexBox.style.alignItems = "flex-start";
      break;
    case 8:
      flexBox.style.alignItems = "flex-end";
      break;
    case 9:
      flexBox.style.alignItems = "center";
      break;
    case 10:
      flexBox.style.alignItems = "baseline";
      break;
    case 11:
      flexBox.style.flexDirection = "row";
      break;
    case 12:
      flexBox.style.flexDirection = "row-reverse";
      break;
    case 13:
      flexBox.style.flexDirection = "column";
      break;
    case 14:
      flexBox.style.flexDirection = "column-reverse";
      break;

    default:
      break;
  }
}
