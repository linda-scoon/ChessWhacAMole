import Movements from "./movements.js";
import chessPiece from "./chessPiece.js";

export default class King extends chessPiece {
  constructor() {
    super("king");
    this.img.id = "king";
    this.img.src = "img/blackKing.webp";
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
    this.movements.upRight(row, col);
    this.movements.downLeft(row, col);
    this.movements.downRight(row, col);
    this.movements.upLeft(row, col);
    this.allowedMoves = this.movements.getAllowedMoves();
    this.movements.reset();
  }
}
