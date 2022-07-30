import chessPiece from "/chessPiece.js";

export default class Queen extends chessPiece {
  aAscii = 97;
  hAscii = 104;
  boardSize = 8;
  allowedMoves = new Map();

  constructor() {
    super("bishop");

    this.img = document.createElement("img");
    this.img.draggable = true;
    this.img.id = "bishop";
    this.img.src = "img/blackBishop.webp";
    this.row;
    this.col;
  }

  getAllowedMovesBishop() {
    return this.allowedMoves;
  }

  left(row, col) {
    let sideSteps = 1;
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
    let sideSteps = 1;
    let right = col.charCodeAt(0);
    // 1 step right (addition)
    right = right + sideSteps;

    if (right <= this.hAscii) {
      right = String.fromCharCode(right);
      this.allowedMoves.set("right", right + row);
    }
  }

  down(row, col) {
    let downSteps = 1;
    // 1 step/rows down
    let down = parseInt(row) - downSteps;

    if (down > 0) {
      this.allowedMoves.set("down", col + down);
    }
  }

  up(row, col) {
    let upSteps = 1; // a Bishop can move 1 step upward

    // 1 step upward (current_piece_row + add_1_row)
    let up = parseInt(row) + upSteps;

    if (up <= this.boardSize) {
      // TRUE - if the value of UP is less than, or equal to, 8 (which is the maximum number of rows on a chessboard).
      this.allowedMoves.set("Bishop up", up, col);
      this.allowedMoves.set("up", col + up);
    }
  }

  /**
   * Checks piece's current available moves
   */
  checkMoves(col, row) {
    this.allowedMoves.clear();
    //up
    this.up(row, col);

    //down
    this.down(row, col);

    //right
    this.right(row, col);

    // left
    this.left(row, col);

    //pass allowed moves back to parent class
    super.setAllowedMoves(this.getAllowedMovesBishop());
  }
}
