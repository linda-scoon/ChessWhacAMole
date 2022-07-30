export class chessPiece {
  
  allowedMoves = new Map();
  constructor(name) {
    this.pieceName = name;
    this.allowedMoves = "test";
  }

  getName() {
    return this.pieceName;
  }

  setAllowedMoves(allowedMoves) {
    this.allowedMoves = allowedMoves;
  }

  getAllowedMoves() {
    return this.allowedMoves;
  }
}
