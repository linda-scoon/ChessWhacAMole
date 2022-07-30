import chessPiece from "/chessPiece.js";
import Movements from "/movements.js";

export default class Pawn extends chessPiece {
  constructor() {
    super("pawn");
    this.img.id = "pawn";
    this.img.src = "img/blackPawn.webp";
    this.movements = new Movements();
  }

  /**
   * Checks piece's current available moves
   * First clear moves from parent then gets new moves from movements
   * finaly clears resets movements
   */
  checkMoves(row, col) {
    super.clearMoves();
    this.movements.upOneStep(row, col);
    this.movements.upRight(row, col);
    this.movements.upLeft(row, col);
     this.allowedMoves = this.movements.getAllowedMoves();
    this.movements.reset();
  }
}
