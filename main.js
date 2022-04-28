import Knight,{getAllowedMoves} from "/knight.js";

window.onload = () => startGame();

let knight = new Knight();
class Board {
  constructor() {
    this.target;
    this.numPieces = 1;
    this.pieces = [knight];
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
    if (this.id == move) {
      if (board.target == this.id) {
        placeTarget();
      }
      this.appendChild(piece);
      knight.col = this.id.split("")[0];
      knight.row = this.id.split("")[1];
      knight.checkMoves(knight.col, knight.row);
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

function displayPieces() {
  board.pieces.forEach((piece) => {
    //had to do this, this way so as to deconstruct the coordinates
    let { col, row } = getCoordinate();
    piece.row = row;
    piece.col = col;

    document.querySelector("#" + piece.col + piece.row).appendChild(piece.img);
    piece.checkMoves(piece.col, piece.row);
  });
}

function placeTarget() {
  //clean up
  clearTarget();

  //let the board know what is going on
  let { col, row } = getCoordinate();
  board.target = col + row;

  // create target node
  let node = document.createElement("img");
  node.src = "img/target.webp";
  node.id = "target";

  //display target
  document.querySelector("#" + board.target).appendChild(node);
}

function clearTarget() {
  //only attempt to clear if there is a target
  if (board.target) {
    document
      .querySelector("#" + board.target)
      .removeChild(document.querySelector("#target"));
  }
}
