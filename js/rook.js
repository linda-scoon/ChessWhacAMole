import chessPiece from "./chessPiece.js";
import Movements from "./movements.js";
export default class Rook extends chessPiece {
  constructor() {
    super("rook");
    this.img.id = "rook";
    this.img.src = "img/blackRook.webp";
    this.movements = new Movements();
  }

  /**
   * Checks piece's current available moves
   * First clear moves from parent then gets new moves from movements
   * finaly clears resets movements
   */
  checkMoves(row, col) {
    super.clearMoves();
    this.movements.leftOneStep(row, col);
    this.movements.rightOneStep(row, col);
    this.movements.downOneStep(row, col);
    this.movements.upOneStep(row, col);
    this.allowedMoves = this.movements.getAllowedMoves();
    this.movements.reset();
  }
}
