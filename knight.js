import Movements from "/movements.js";
import chessPiece from "/chessPiece.js";

export default class Knight extends chessPiece {
  movements;
  constructor() {
    super("knight");
    this.img.id = "knight";
    this.img.src = "img/blackKnight.webp";
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
