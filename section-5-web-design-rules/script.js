const note_1_p = document.querySelectorAll(".note-1-p")
const note_1_img_1 = document.querySelector("#note-1-img-1")
const note_1_img_2 = document.querySelector("#note-1-img-2")

note_1_p.forEach((p, idx) => {
  p.addEventListener("click", () => {
    console.log(idx)
    if (idx === 0) {
      note_1_img_1.src = "./images/luxury.png"
      note_1_img_2.src = "./images/luxury-2.png"
    }
    if (idx === 1) {
      note_1_img_1.src = "./images/simple-1.png"
      note_1_img_2.src = "./images/simple-2.png"
    }
    if (idx === 2) {
      note_1_img_1.src = "./images/plain-1.png"
      note_1_img_2.src = "./images/plain-2.png"
    }
    if (idx === 3) {
      note_1_img_1.src = "./images/bold-1.png"
      note_1_img_2.src = ""
    }
    if (idx === 4) {
      note_1_img_1.src = "./images/calm-1.png"
      note_1_img_2.src = "./images/calm-2.png"
    }
    if (idx === 5) {
      note_1_img_1.src = "./images/startup-1.png"
      note_1_img_2.src = ""
    }
    if (idx === 6) {
      note_1_img_1.src = "./images/fun-1.png"
      note_1_img_2.src = "./images/fun-2.png"
    }
  })
})
