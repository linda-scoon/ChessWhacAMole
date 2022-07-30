export default class chessPiece {
  allowedMoves;
  aAscii = 97;
  hAscii = 104;
  boardSize = 8;
  img;

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
