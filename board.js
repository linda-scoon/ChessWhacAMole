export class Board {
  pieceArray = new Array();
  pieceIDArray = new Array();
  counter = 0;
  
  constructor() {}
  addPiece(piece) {
    pieceArray.push(piece);
    pieceIDArray[counter] = counter;
    counter++;
  }

  getPieceArray() {
    return pieceArray;
  }

  getPiece(index) {
    return pieceArray[index];
  }

  getCounter() {
    return counter;
  }

  getPieceIDArray() {
    return pieceIDArray;
  }
}
