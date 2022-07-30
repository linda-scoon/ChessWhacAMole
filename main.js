import Knight from "/knight.js";
import Board from "/board.js";
import King from "/king.js";
import Pawn from "/pawn.js";
import Queen from "/queen.js";
import Rook from "/rook.js";
import Bishop from "/bishop.js";

//start game on window open
window.onload = () => startGame();

//initialise board
let board = new Board();

//initialise pieces
let knight = new Knight();
let king = new King();
let pawn = new Pawn();
let queen = new Queen();
let rook = new Rook();
let bishop = new Bishop();

//Add pieces to board
// board.addPiece(knight);
// board.addPiece(king);
// board.addPiece(pawn);
// board.addPiece(queen);
// board.addPiece(rook);
// board.addPiece(bishop);

function startGame() {
  placeTarget();
  document.querySelectorAll(".col").forEach((square) => {
    square.addEventListener("dragover", dropPiece);
    square.addEventListener("click", dropPiece);
  });
  displayPieces();
}

function dropPiece($event) {
  $event.preventDefault();
  board.getPieceArray().forEach((pieceInArray) => {
    let pieceName = "#" + pieceInArray.getName();
    let piece = document.querySelector(pieceName);

    //running checkmoves on the piece in order to calculate valid moves
    pieceInArray.checkMoves(pieceInArray.row, pieceInArray.col);
    pieceInArray.getAllowedMoves().forEach((move) => {
      if (this.id == move) {
        if (board.target == this.id) {
          placeTarget();
        }
        this.appendChild(piece);
        pieceInArray.col = this.id.split("")[0];
        pieceInArray.row = parseInt(this.id.split("")[1]);
        return;
      }
    });
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
  board.getPieceArray().forEach((piece) => {
    let { col, row } = getCoordinate();
    piece.row = row;
    piece.col = col;

    document.querySelector("#" + piece.col + piece.row).appendChild(piece.img);
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
