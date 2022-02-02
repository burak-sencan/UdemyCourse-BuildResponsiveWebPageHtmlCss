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
const flexBox = document.getElementById("note5FlexBox")

note5buttons.forEach((button, idx) => {
  button.addEventListener("click", () => {
    changeFlexProperty(idx);
  });
});

function changeFlexProperty(idx) {
  switch (idx) {
    case 0:
      console.log(idx);
      flexBox.style.justifyContent = "flex-start";
      break;
    case 1:
      console.log(idx);
      flexBox.style.justifyContent = "flex-end";

      break;
    case 2:
      console.log(idx);
      flexBox.style.justifyContent = "center";

      break;
    case 3:
      flexBox.style.justifyContent = "space-between";
      break;
    case 4:
      console.log(idx);
      flexBox.style.justifyContent = "space-around";

      break;
    case 5:
      console.log(idx);
      flexBox.style.justifyContent = "space-evently";

      break;
    case 6:
      console.log(idx);
      flexBox.style.alignItems = "stretch";

      break;
    case 7:
      console.log(idx);
      flexBox.style.alignItems = "flex-start";

      break;
    case 8:
      console.log(idx);
      flexBox.style.alignItems = "flex-end";

      break;
    case 9:
      console.log(idx);
      flexBox.style.alignItems = "center";

      break;
    case 10:
      console.log(idx);
      flexBox.style.alignItems = "baseline";

      break;
    case 11:
      console.log(idx);
      flexBox.style.flexDirection = "row";

      break;
    case 12:
      console.log(idx);
      flexBox.style.flexDirection = "row-reversed";

      break;
    case 13:
      console.log(idx);
      flexBox.style.flexDirection = "column";

      break;
    case 14:
      console.log(idx);
      flexBox.style.flexDirection = "column-reverse";

      break;

    default:
      break;
  }
}

/*
script.js:76 <button class=​"note5Btn justifyOptions note5ActiveBtn">​flex-start​</button>​ 0
script.js:76 <button class=​"note5Btn justifyOptions">​flex-end​</button>​ 1
script.js:76 <button class=​"note5Btn justifyOptions">​center​</button>​ 2
script.js:76 <button class=​"note5Btn justifyOptions">​space-between​</button>​ 3
script.js:76 <button class=​"note5Btn justifyOptions">​space-around​</button>​ 4
script.js:76 <button class=​"note5Btn justifyOptions">​space-evently​</button>​ 5
script.js:76 <button class=​"note5Btn alignOptions note5ActiveBtn">​stretch​</button>​ 6
script.js:76 <button class=​"note5Btn alignOptions ">​flex-start​</button>​ 7
script.js:76 <button class=​"note5Btn alignOptions">​flex-end​</button>​ 8
script.js:76 <button class=​"note5Btn alignOptions">​center​</button>​ 9
script.js:76 <button class=​"note5Btn alignOptions">​baseline​</button>​ 10
script.js:76 <button class=​"note5Btn directionOptions note5ActiveBtn">​row​</button>​ 11
script.js:76 <button class=​"note5Btn directionOptions">​row-reversed​</button>​ 12
script.js:76 <button class=​"note5Btn directionOptions">​column​</button>​ 13
script.js:76 <button class=​"note5Btn directionOptions">​column-reverse​</button>​ 14
*/
