import Knight, { getAllowedMoves } from "/knight.js";

window.onload = () => startGame();

let knight = new Knight();
class Board {
  constructor() {
    this.target;
    this.numPieces = 1;
    this.pieces = [knight];
    this.taken = new Array();
  }
}
let board = new Board();

function startGame() {
  placeTarget();
  document.querySelectorAll(".col").forEach((square) => {
    square.addEventListener("dragover", dropPiece);
    square.addEventListener("click", dropPiece);
  });
  displayPieces();
}

function dropPiece(e) {
  e.preventDefault();
  const piece = document.querySelector("#knight");
  getAllowedMoves().forEach((move) => {
    // if the move is a valid move
    if (this.id == move) {
      // clear old coordinates from the boards taken squares
      board.taken = board.taken.filter(
        (toRemove) => toRemove !== knight.col + knight.row
      );
      // append piece to new square
      this.appendChild(piece);
      knight.col = this.id.split("")[0];
      knight.row = this.id.split("")[1];
      // update taken squares
      board.taken.push(knight.col + knight.row);
      // calculate new allowed moves
      knight.checkMoves(knight.col, knight.row);

      // if the piece has reached the target then move target to new location
      if (board.target == this.id) {
        placeTarget();
      }
      /***************/ console.log(board.taken);
      return;
    }
  });
}

function getCoordinate() {
  // pick random row and column
  let rowLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let col = rowLetters[Math.round(Math.random() * 7)];
  let row = 1 + Math.round(Math.random() * 7);
  return { col, row };
}

/**
 * This loops through all the pieces, provided to the board in board.pieces, and displays them
 */
function displayPieces() {
  board.pieces.forEach((piece) => {
    let { col, row } = getCoordinate();
    console.log(board.taken.includes(piece.col + piece.row));
    if (board.taken.includes(piece.col + piece.row)) {
      displayPieces();
    } else {
      piece.row = row;
      piece.col = col;
      board.taken.push(piece.col + piece.row);

      document
        .querySelector("#" + piece.col + piece.row)
        .appendChild(piece.img);
      piece.checkMoves(piece.col, piece.row);
    }
  });
}

function placeTarget() {
  //clear the target
  board.taken = board.taken.filter((toRemove) => toRemove !== board.target);
  clearTarget();

  //get new coordinates and update the board
  let { col, row } = getCoordinate();
  board.target = col + row;
  console.log(board.taken.includes(board.target));

  //if the board already has a piece at the given coordinates then rerun the method and get new coordinates
  if (board.taken.includes(board.target)) {
    placeTarget();
  } else {
    // create target node
    let node = document.createElement("img");
    node.src = "img/target.webp";
    node.id = "target";
    board.taken.push(board.target);

    //display target
    document.querySelector("#" + board.target).appendChild(node);
  }
}

function clearTarget() {
  //only attempt to clear if there is a target
  if (board.target) {
    document
      .querySelector("#" + board.target)
      .removeChild(document.querySelector("#target"));
  }
}
