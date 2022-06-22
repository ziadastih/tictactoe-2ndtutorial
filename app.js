const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById("play-text");
const spaces = [];
const oText = "O";
const xText = "X";
const restartBtn = document.getElementById("restart-btn");
let currentPlayer;

//  for each for the boxes

boxes.forEach((box) => {
  box.addEventListener("click", boxClicked);
});

// click function
function boxClicked(e) {
  const id = e.target.id;
  //   if space[id] is null which we set it by default we want to replace it with the currentplayer and we want to fill that box with the same current player ,this will help no replace any already set
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    // setting the winner result
    if (playerHasWon()) {
      playText.innerText = `${currentPlayer}'s has won!`;
      //   remove the eventListener
      boxes.forEach(function (box) {
        box.removeEventListener("click", boxClicked);
      });
    }
    if (spaces.length === 9 && !playerHasWon()) {
      playText.innerText = `it's a draw`;
    }

    // swapping ,if current player is o switch to x....
    currentPlayer = currentPlayer === oText ? xText : oText;
  }
}
// setting  8 conditions which is equal to our winning conditions
const playerHasWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
  }
  if (spaces[1] === currentPlayer) {
    if (spaces[4] === currentPlayer && spaces[7] === currentPlayer) {
      return true;
    }
  }
  if (spaces[2] === currentPlayer) {
    if (spaces[5] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
  }
  if (spaces[3] === currentPlayer) {
    if (spaces[4] === currentPlayer && spaces[5] === currentPlayer) {
      return true;
    }
  }
  if (spaces[6] === currentPlayer) {
    if (spaces[7] === currentPlayer && spaces[8] === currentPlayer) {
      return true;
    }
  }
  if (spaces[6] === currentPlayer) {
    if (spaces[4] === currentPlayer && spaces[2] === currentPlayer) {
      return true;
    }
  }
};

const restart = () => {
  // to re add the  eventlistener,set back the array to null ,and clear all the boxes and reput the current player to o

  spaces.forEach((space, index) => {
    spaces[index] = null;
  });
  boxes.forEach((box) => {
    box.addEventListener("click", boxClicked);
    box.innerText = " ";
  });
  playText.innerHTML = ` let's play !`;
  currentPlayer = oText;
};
restartBtn.addEventListener("click", restart);

restart();
