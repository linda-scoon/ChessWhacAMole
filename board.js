let pieceArray = new Array();
let pieceIDArray = new Array();
let counter = 0;

export default class Board {
  constructor() {}
}

export function addPiece(piece) {
  pieceArray.push(piece);
  pieceIDArray[counter] = counter;
  counter++;
}

export function getPieceArray() {
  return pieceArray;
}

export function getPiece(index) {
  return pieceArray[index];
}

export function getCounter() {
  return counter;
}

export function getPieceIDArray() {
  return pieceIDArray;
}
