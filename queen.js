import chessPiece from "/chessPiece.js";
import Movements from "/movements.js";

export default class Queen extends chessPiece {
  constructor() {
    super("queen");
    this.img.id = "queen";
    this.img.src = "img/blackQueen.webp";
    this.movements = new Movements();
  }

  /**
   * Checks piece's current available moves
   * First clear moves from parent then gets new moves from movements
   * finaly clears resets movements
   */
  checkMoves(row, col) {
    super.clearMoves();
    this.movements.knightUp(row, col);
    this.movements.knightDown(row, col);
    this.movements.knightRight(row, col);
    this.movements.knightLeft(row, col);
     this.allowedMoves = this.movements.getAllowedMoves();
    this.movements.reset();
  }
}
