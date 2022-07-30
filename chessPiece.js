const allowedMoves = new Map();

export default class chessPiece {
  constructor(name) {
    this.pieceName = name;
    this.allowedMoves = 'test';
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
