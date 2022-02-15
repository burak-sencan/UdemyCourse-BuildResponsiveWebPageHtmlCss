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
const el_3 = document.getElementById("el_3");

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
  } else if (idx >= 15 && idx <= 19) {
    /*6,7,8,9,10 => align-selft */
    for (let i = 15; i <= 19; i++)
      note5buttons[i].classList.remove("note5ActiveBtn");
  } else if (idx >= 20 && idx <= 21) {
    /*20,21 => flex-grow */
    for (let i = 20; i <= 21; i++)
      note5buttons[i].classList.remove("note5ActiveBtn");
  } else if (idx >= 22 && idx <= 27) {
    /*22,23,24,25,26 => flex-order */
    for (let i = 22; i <= 27; i++){
      note5buttons[i].classList.remove("note5ActiveBtn");
  }}
}

const properties = [
  "flex-start",
  "flex-end",
  "center",
  "space-between",
  "space-around",
  "space-evenly",
  "stretch",
  "flex-start",
  "flex-end",
  "center",
  "baseline",
  "row",
  "row-reverse",
  "column",
  "column-reverse",
  "stretch",
  "flex-start",
  "flex-end",
  "center",
  "baseline",

  "0",
  "1",

  "0",
  "2",
  "4",
  "6",
  "8",
  "10",
];
function changeFlexProperty(idx) {
  if (idx >= 0 && idx <= 5) {
    flexBox.style.justifyContent = properties[idx];
  } else if (idx >= 6 && idx <= 10) {
    flexBox.style.alignItems = properties[idx];
  } else if (idx >= 11 && idx <= 14) {
    flexBox.style.flexDirection = properties[idx];
  } else if (idx >= 15 && idx <= 19) {
    el_3.style.alignSelf = properties[idx];
  } else if (idx >= 20 && idx <= 21) {
    el_3.style.flexGrow = properties[idx];
  } else if (idx >= 22 && idx <= 27) {
    el_3.style.order = properties[idx];
    console.log(el_3.style.order);
  }
}




/*For note6 grid features */
const grid_template_columns_1 = document.getElementById("grid-template-columns-1")
const grid_template_columns_2 = document.getElementById("grid-template-columns-2")
const grid_template_columns_3 = document.getElementById("grid-template-columns-3")
const grid_template_columns_4 = document.getElementById("grid-template-columns-4")
const grid_template_columns_5 = document.getElementById("grid-template-columns-5")
const grid_template_columns_6 = document.getElementById("grid-template-columns-6")
const grid_template_columns_7 = document.getElementById("grid-template-columns-7")
const grid_template_columns_8 = document.getElementById("grid-template-columns-8")
// const options = document.querySelectorAll(".grid-p")
const grid_template_columns_div = document.getElementById("grid-template-columns-div") 
console.log(grid_template_columns_div)

grid_template_columns_1.addEventListener("click",()=>{
  grid_template_columns_div.style.gridTemplateColumns = "60px 60px"
})
grid_template_columns_2.addEventListener("click",()=>{
  grid_template_columns_div.style.gridTemplateColumns = "1fr 60px"
})
grid_template_columns_3.addEventListener("click",()=>{
  grid_template_columns_div.style.gridTemplateColumns = "1fr 2fr"
})
grid_template_columns_4.addEventListener("click",()=>{
  grid_template_columns_div.style.gridTemplateColumns = "8ch auto"
})
grid_template_columns_5.addEventListener("click",()=>{
  grid_template_columns_div.style.gridTemplateColumns = "repeat(5,60px)"
})
grid_template_columns_6.addEventListener("click",()=>{
  grid_template_columns_div.style.gridTemplateColumns = "minmax(20px, 1fr)"
  
})
grid_template_columns_7.addEventListener("click",()=>{
  grid_template_columns_div.style.gridTemplateColumns = "fit-content(40%)"
  
})
grid_template_columns_8.addEventListener("click",()=>{
  grid_template_columns_div.style.gridTemplateColumns = "repeat(auto-fill, 60px) 40%"
})