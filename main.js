/*
 * Calculating allowable moves on the chess board requires converting letters/columns to ASCII. Explanation below...
 *
 * Firstly, a chess board is an 8x8 board, typically denoted with rows being numbered from 1 to 8, and columns labelled under letters from a to h.
 * To move a piece on the board, we would denote the name of the piece and where it is moving to. King to e5, for example.
 *
 * Now onto ASCII...
 *
 * In ASCII, a pawn moving two spaces forward from a2 to a4 would be a pawn moving from column 97 of row 2, to column 97 of row 4. The ASCII for a = 97, and we add 2 spaces to the original row of 2.
 * So, 2 + 2 = 4. Pawn from a2 to a4.
 * We are only adding/subtracting from the second part of the chess piece coordinates, which is a numeric character.
 *
 * That is nice and easy!
 *
 * However! If we were to instead move a rook from a1 to b1, would have to calculate the difference between a and b...
 * So, we instead use convert this to ASCII which represents the characters 'a' and 'b' as numbers!
 *
 * In fact, we can use ASCII to convert all of the 8 characters on a chessboard, from a to h. How exciting!
 *
 * Converting to ASCII, the numbers to denote the letters - consecutively - from a to h is from 97 to 104. See below for explanation...
 *
 * a = 97
 * b = 98
 * c = 99
 * d = 100
 * e = 101
 * f = 102
 * g = 103
 * h = 104!! Yay!
 *
 * Using this, we can now figure out how to move our rook from a1 to b1.
 *
 * The conversation for a1 would be a = column "97" (in ASCII) and the row is 1. b1 would be column "98" and the row would stay as 1.
 * In order to move the rook from a1 to b1, we could add 1 to 97, to get 98 - which is b1! Yay!
 *
 * Now, you should understand most of the program once you have that logic down. Ur welcome.
 *
 */

import Knight from "/knight.js";
import Board, { addPiece, getPieceArray, getPieceIDArray,getPiece} from "/board.js";
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
addPiece(knight);
addPiece(king);
addPiece(pawn);
addPiece(queen);
addPiece(rook);
addPiece(bishop);

function startGame() {
  console.log("startGame() function started."); //debugging

  placeTarget();

  document.querySelectorAll(".col").forEach((square) => {
    square.addEventListener("dragover", dropPiece);
    square.addEventListener("click", dropPiece);
  });

  displayPieces();

}

function dropPiece(e) {
  console.log("dropPiece(e) function started."); //debugging

  e.preventDefault();

  console.log("" + getPiece(0).getName());
  
  getPieceArray().forEach((pieceInArray) => {
    let pieceName = "#" + (pieceInArray.getName());
    let piece = document.querySelector(pieceName);
    
    //running checkmoves on the piece in order to calculate valid moves
    pieceInArray.checkMoves(pieceInArray.col, pieceInArray.row);

    pieceInArray.getAllowedMoves().forEach((move) => {

      console.log(this.id + " and " + move);
      
      if (this.id == move) {
        if (board.target == this.id) {
          placeTarget();
        }
  
        this.appendChild(piece);
  
        pieceInArray.col = this.id.split("")[0];
        pieceInArray.row = this.id.split("")[1];

        return;
      }
    });

    // getAllowedMovesKing().forEach((move) => {
    //   console.log(this.id + " and " + move);
    //   if (this.id == move) {
    //     if (board.target == this.id) {
    //       placeTarget();
    //     }
  
    //     this.appendChild(piece);
  
    //     king.col = this.id.split("")[0];
    //     king.row = this.id.split("")[1];
    //     king.checkMoves(king.col, king.row);
  
    //     return;
    //   }
    // });
  
  });
}

function getCoordinate() {
  console.log("getCoordinate() function started."); //debugging

  // pick random row and column
  let rowLetters = ["a", "b", "c", "d", "e", "f", "g", "h"];
  let col = rowLetters[Math.round(Math.random() * 7)];
  let row = 1 + Math.round(Math.random() * 7);

  console.log("Random coordinates: col = " + col + ", row = " + row); //debugging
  return { col, row };
}

function displayPieces() {
  console.log("displayPieces() function started."); //debugging

  getPieceArray().forEach((piece, i) => {
    //had to do this, this way so as to deconstruct the coordinates
    let { col, row } = getCoordinate();
    console.log(
      "Piece " +
        (i + 1) +
        "[" +
        piece.constructor.name +
        "]" +
        " in position: " +
        col +
        row
    ); //debugging

    piece.row = row;
    piece.col = col;

    document.querySelector("#" + piece.col + piece.row).appendChild(piece.img);
    //piece.checkMoves(piece.col, piece.row);
  });
}

function placeTarget() {
  console.log("placeTarget() function started.");

  //clean up
  clearTarget();

  //let the board know what is going on
  let { col, row } = getCoordinate();
  console.log("Target Position: " + col + row); //debugging

  board.target = col + row;

  // create target node
  let node = document.createElement("img");
  node.src = "img/target.webp";
  node.id = "target";

  //display target
  document.querySelector("#" + board.target).appendChild(node);
}

function clearTarget() {
  console.log("clearTarget() function started.");

  //only attempt to clear if there is a target
  if (board.target) {
    document
      .querySelector("#" + board.target)
      .removeChild(document.querySelector("#target"));
  }
}
