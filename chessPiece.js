export default class chessPiece {
  
  allowedMoves = new Map();
  constructor(name) {
    this.pieceName = name;
    this.allowedMoves ;
  }

  getName() {
    return this.pieceName;
  }

  setName(newName) {
    this.pieceName = newName;
  }

  setAllowedMoves(allowedMoves) {
    this.allowedMoves = allowedMoves;
  }

  getAllowedMoves() {
    return this.allowedMoves;
  }
}
