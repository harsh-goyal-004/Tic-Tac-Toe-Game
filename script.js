let boxes = document.querySelectorAll(".box");
let newGame = document.querySelector(".game-btn1");
let reset = document.querySelector(".game-btn2");
let divX = document.querySelector("#divX");
let divO = document.querySelector("#divO");
let gameGrid = document.querySelector("#game-grid");
let turn0 = true;

const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (box.innerText === "") {
      if (turn0) {
        box.style.color = "blue";
        box.innerText = "O";
        turn0 = false;
      } else {
        box.style.color = "red";
        box.innerText = "X";
        turn0 = true;
      }

      checkWinner();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if (pos1 === pos2 && pos1 === pos3) {
        if (pos1 === "X") {
          divX.classList.remove("hide");
          gameGrid.classList.add("transparent");
          disableBoxes();
        } else {
          divO.classList.remove("hide");
          gameGrid.classList.add("transparent");
          disableBoxes();
        }
      }
    }
  }
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

newGame.addEventListener("click", () => {
  turn0 = true;
  boxes.forEach((box) => {
    if (box.innerText !== "") {
      box.innerText = "";
      gameGrid.classList.remove("transparent");
      divO.classList.add("hide");
      divX.classList.add("hide");
    }
    box.disabled = false;
  });
});

reset.addEventListener("click", () => {
  turn0 = true;
  boxes.forEach((box) => {
    if (box.innerText !== "") {
      box.innerText = "";
      gameGrid.classList.remove("transparent");
      divO.classList.add("hide");
      divX.classList.add("hide");
    }
    box.disabled = false;
  });
});
