import chessPiece from "/chessPiece.js";
export default class Queen extends chessPiece {
  aAscii = 97;
  hAscii = 104;
  boardSize = 8;
  allowedMoves = new Map();

  constructor() {
    super("rook");
    this.img = document.createElement("img");
    this.img.draggable = true;
    this.img.id = "rook";
    this.img.src = "img/blackRook.webp";
    this.row;
    this.col;
  }

  getAllowedMovesRook() {
    return this.allowedMoves;
  }

  left(row, col) {
    var sideSteps = 1;
    let left = col.charCodeAt(0); //converts the letter from 'a' to 'h' (denoting column) to ASCII equivalent (numbers from 97 to 104).

    //  1 step left (subtraction)
    left = left - sideSteps;

    if (left >= this.aAscii) {
      // if column is valid then position is allowed move
      left = String.fromCharCode(left);
      this.allowedMoves.set("left", left + row);
    }
  }

  right(row, col) {
    var sideSteps = 1;
    let right = col.charCodeAt(0);

    // 1 step right (addition)
    right = right + sideSteps;

    if (right <= this.hAscii) {
      right = String.fromCharCode(right);
      this.allowedMoves.set("right", right + row);
    }
  }

  down(row, col) {
    var downSteps = 1;

    // 1 step/rows down
    let down = parseInt(row) - downSteps;

    if (down > 0) {
      this.allowedMoves.set("down", col + down);
    }
  }

  up(row, col) {
    var upSteps = 1; // a rook can move 1 step upward

    // 1 step upward (current_piece_row + add_1_row)
    let up = parseInt(row) + upSteps;

    if (up <= this.boardSize) {
      // TRUE - if the value of UP is less than, or equal to, 8 (which is the maximum number of rows on a chessboard).
      this.allowedMoves.set("Rook up", up, col);
      this.allowedMoves.set("up", col + up);
    }
  }

  /**
   * Checks piece's current available moves
   */
  checkMoves(col, row) {
    this.allowedMoves.clear();
    this.up(row, col);
    this.down(row, col);
    this.right(row, col);
    this.left(row, col);

    //pass allowed moves back to parent class
    super.setAllowedMoves(this.getAllowedMovesRook());
  }
}
