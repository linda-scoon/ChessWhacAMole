export default class Board {
  pieceArray = new Array();
  pieceIDArray = new Array();
  counter = 0;
  
  constructor() {}
  addPiece(piece) {
    this.pieceArray.push(piece);
    this.pieceIDArray[this.counter] = this.counter;
    this.counter++;
  }

  getPieceArray() {
    return this.pieceArray;
  }

  getPiece(index) {
    return this.pieceArray[index];
  }

  getCounter() {
    return this.counter;
  }

  getPieceIDArray() {
    return this.pieceIDArray;
  }
}
