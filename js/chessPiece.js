export default class chessPiece {

  constructor(name) {
    this.img = document.createElement("img");
    this.img.draggable = true;
    this.pieceName = name;
    this.allowedMoves = [];
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

  clearMoves() {
    this.allowedMoves = [];
  }
}
