let numbersUsed = [];

function onloadOperations() {
  let boardNode = document.getElementById("bingo-board");
  let cellNumber = 76;

  for (let cell = 1; cell <= cellNumber; cell++) {
    let newCell = document.createElement("div");
    newCell.classList.add("bingo-cell");
    newCell.innerText = cell;

    boardNode.appendChild(newCell);
  }
}

function randomizeNumber() {
  let randomNumber = Math.floor(Math.random() * 76) + 1;
  let randomColor = randomizeColor();

  if (numbersUsed.includes(randomNumber)) {
    console.log("number already used");
  } else {
    displayNumber(randomNumber, randomColor);
    displayUserBoardNumber(randomNumber, randomColor);
    numbersUsed.push(randomNumber);
    console.log(numbersUsed);
  }
}

function displayNumber(randomNumber, randomColor) {
  let cellNodes = document.getElementsByClassName("bingo-cell");

  for (cell of cellNodes) {
    if (randomNumber == cell.innerText) {
      cell.style.backgroundColor = randomColor;
      console.log(randomNumber, randomColor);
    }
  }
}

function randomizeColor() {
  function randomInteger(max) {
    return Math.floor(Math.random() * (max + 1));
  }

  function randomRgbColor() {
    let r = randomInteger(255);
    let g = randomInteger(255);
    let b = randomInteger(255);
    return [r, g, b];
  }

  function randomHexColor() {
    let [r, g, b] = randomRgbColor();

    let hr = r.toString(16).padStart(2, "0");
    let hg = g.toString(16).padStart(2, "0");
    let hb = b.toString(16).padStart(2, "0");

    return "#" + hr + hg + hb;
  }

  let hex = randomHexColor();
  return hex;
}

function createUserBoards() {
  let userBoardsAmount = document.getElementById("userBoardsAmount").value;
  let userBoardsNumber = parseInt(userBoardsAmount);

  if (userBoardsAmount === "" || userBoardsAmount < 1) {
    alert("Please enter a number greater than 0");
  } else {
    displayUserBoards(userBoardsNumber);
  }
}

function displayUserBoards(userBoardsNumber) {
  let userBoardsNode = document.getElementById("user-boards");

  if (userBoardsNode.childElementCount > 0) {
    userBoardsNode.innerHTML = "";
  }

  for (let userBoards = 1; userBoards <= userBoardsNumber; userBoards++) {
    let newBoard = document.createElement("div");
    newBoard.classList.add("userboards");
    userBoardsNode.appendChild(newBoard);
    console.log(newBoard);
    let usedNumbers = [];

    for (let cell = 1; cell <= 24; cell++) {
      let newCell = document.createElement("div");
      let randomNumber = Math.floor(Math.random() * 76) + 1;

      newCell.classList.add("bingo-cell");

      if (usedNumbers.includes(randomNumber)) {
        console.log("this number exists");
        cell--;
      } else {
        newCell.innerText = randomNumber;
        usedNumbers.push(randomNumber);
        newBoard.appendChild(newCell);
      }
    }
  }
}

function displayUserBoardNumber(randomNumber, randomColor) {
  let cellNodes = document.getElementsByClassName("bingo-cell");

  for (cell of cellNodes) {
    if (randomNumber == cell.innerText) {
      cell.style.backgroundColor = randomColor;
      console.log(randomNumber, randomColor);
    }
  }
}

window.onload = onloadOperations;
