import chessPiece from "/chessPiece.js";
import Movements from "/movements.js";

export default class Bishop extends chessPiece {
  step;
  constructor() {
    super("bishop");
    this.step = 1;
    this.img.id = "bishop";
    this.img.src = "img/blackBishop.webp";
    this.movements = new Movements();
  }

  /**
   * Checks piece's current available moves
   * First clear moves from parent then gets new moves from movements
   * finaly clears resets movements
   */
  checkMoves(row, col) {
    super.clearMoves();
    this.movements.upRightDiag(row, col);
    this.movements.downRightDiag(row, col);
    this.movements.upLeftDiag(row, col);
    this.movements.downLeftDiag(row, col);
    this.allowedMoves = this.movements.getAllowedMoves();
    this.movements.reset();
  }
}
