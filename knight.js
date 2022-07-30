import chessPiece from "/chessPiece.js";

export default class Knight extends chessPiece {
  aAscii = 97;
  hAscii = 104;
  boardSize = 8;
  allowedMoves = new Map();
  constructor() {
    super("knight");

    this.img = document.createElement("img");
    this.img.draggable = true;
    this.img.id = "knight";
    this.img.src = "img/blackKnight.webp";
    this.row;
    this.col;
  }

  getAllowedMovesKnight() {
    return this.allowedMoves;
  }

  getKnightName() {
    return "knight";
  }

  left(row, col) {
    let verticalSteps = 1;
    let sideSteps = 2;

    let left = col.charCodeAt(0); //converts the letter from 'a' to 'h' (denoting column) to ASCII equivalent (numbers from 97 to 104).

    // 2 steps left (subtraction)
    left = left - sideSteps;

    //up
    let up = parseInt(row) + verticalSteps;
    //down
    let down = parseInt(row) - verticalSteps;

    if (left >= this.aAscii) {
      // if column - moves
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
    // 2 steps right (addition)
    right = right + sideSteps;

    //up
    let up = parseInt(row) + verticalSteps;

    //down
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

    // left
    let left = col.charCodeAt(0);
    left = left - sideSteps;

    //right
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

  up(row, col) {
    let upSteps = 2; // a knight's upward movement would require going 2 rows upwards
    let sideSteps = 1; // it would also include moving a step/column to either the left or right direction.

    // 2 steps upward (current_piece_row + add_2_rows)
    let up = parseInt(row) + upSteps;

    // 1 step to the right (current_piece_row + add_1_col)
    let right = col.charCodeAt(0); // we convert letters a to h into ASCII equivalent and pass to 'right' letiable.
    right = right + sideSteps; // add 1 to column ASCII value.

    // 1 step to the left (current_piece_row + minus_1_col)
    let left = col.charCodeAt(0);
    left = left - sideSteps; // minus 1 from column ASCII value.

    if (up <= this.boardSize) {
      // TRUE - if the value of UP is less than, or equal to, 8 (which is the maximum number of rows on a chessboard).
      if (left >= this.aAscii) {
        // TRUE - if left greater than or equal to 97 (a in ASCII)
        left = String.fromCharCode(left); // Turning left back into a string
        this.allowedMoves.set("upLeft", left + up); // Add to list of allowed moves
      }
      if (right <= this.hAscii) {
        // TRUE - if right less than or equal to 104 (h in ASCII)
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

    //up
    this.up(row, col);

    //down
    this.down(row, col);

    //right
    this.right(row, col);

    // left
    this.left(row, col);

    //pass allowed moves back to parent class
    super.setAllowedMoves(this.getAllowedMovesKnight());
  }
}
