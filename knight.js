import chessPiece from "/chessPiece.js";

export default class Knight extends chessPiece {
  aAscii = 97;
  hAscii = 104;
  boardSize = 8;
  allowedMoves = new Map();
  constructor() {
    super("knight");
    this.img.src = "img/blackKnight.webp";
    this.row;
    this.col;
  }

  left(row, col) {
    let verticalSteps = 1;
    let sideSteps = 2;

    let left = col.charCodeAt(0);
    left = left - sideSteps;
    let up = parseInt(row) + verticalSteps;
    let down = parseInt(row) - verticalSteps;

    if (left >= this.aAscii) {
      left = String.fromCharCode(left);
      if (up <= this.boardSize) {
        this.allowedMoves.set("leftUp", left + up);
      }
      if (down > 0) {
        this.allowedMoves.set("leftDown", left + down);
      }
    }
  }

  right(row, col) {
    let verticalSteps = 1;
    let sideSteps = 2;

    let right = col.charCodeAt(0);
    right = right + sideSteps;
    let up = parseInt(row) + verticalSteps;
    let down = parseInt(row) - verticalSteps;

    if (right <= this.hAscii) {
      right = String.fromCharCode(right);

      if (up <= this.boardSize) {
        this.allowedMoves.set("rightUp", right + up);
      }
      if (down > 0) {
        this.allowedMoves.set("rightDown", right + down);
      }
    }
  }

  down(row, col) {
    let downSteps = 2;
    let sideSteps = 1;

    // 2 steps/rows down
    let down = parseInt(row) - downSteps;
    let left = col.charCodeAt(0);
    left = left - sideSteps;
    let right = col.charCodeAt(0);
    right = right + sideSteps;

    if (down > 0) {
      if (right <= this.hAscii) {
        right = String.fromCharCode(right);
        this.allowedMoves.set("downRight", right + down);
      }
      if (left >= this.aAscii) {
        left = String.fromCharCode(left);
        this.allowedMoves.set("downLeft", left + down);
      }
    }
  }

  /**
   * (1) a knight's upward movement would require going 2 rows upwards
   * (2) it would also include moving a step/column to either the left or right direction.
   * (3) 2 steps upward (current_piece_row + add_2_rows)
   * (4) 1 step to the right (current_piece_row + add_1_col)
   * (5) we convert letters a to h into ASCII equivalent and pass to 'right' letiable.
   * (6) add 1 to column ASCII value.
   * (7) 1 step to the left (current_piece_row + minus_1_col)
   * (8) minus 1 from column ASCII value
   * (9) up <= this.boardSize is TRUE - if the value of UP is less than, or equal to, 8
   *     (which is the maximum number of rows on a chessboard).
   * (10) left >= this.aAscii is TRUE - if left greater than or equal to 97 (a in ASCII)
   * (11) Turning left back into a string
   * (12) Add to list of allowed moves
   * (13) right <= this.hAscii is TRUE - if right less than or equal to 104 (h in ASCII)
   * @param {number} row
   * @param {string} col
   */
  up(row, col) {
    let upSteps = 2; // (1)
    let sideSteps = 1; // (2)
    let up = parseInt(row) + upSteps; // (3)
    let right = col.charCodeAt(0); // [4,5]
    right = right + sideSteps; // (6)
    let left = col.charCodeAt(0); // (7)
    left = left - sideSteps; // (8)

    if (up <= this.boardSize) {
      if (left >= this.aAscii) {
        left = String.fromCharCode(left); // (11)
        this.allowedMoves.set("upLeft", left + up); // (12)
      }
      if (right <= this.hAscii) {
        right = String.fromCharCode(right);
        this.allowedMoves.set("upRight", right + up);
      }
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
    super.setAllowedMoves(this.getAllowedMovesKnight());
  }
}
