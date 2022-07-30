import chessPiece from "/chessPiece.js";

export class Knight extends chessPiece {
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

  /**
   * Checks piece's current available moves
   */
  checkMoves(col, row) {
    console.log("checkMoves(col,row) started.");

    allowedMoves.clear();
    console.log("allowedMoves variable cleared.");

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

  getAllowedMovesKnight() {
    return allowedMoves;
  }

  getKnightName() {
    return "knight";
  }
  left(row, col) {
    var verticalSteps = 1;
    var sideSteps = 2;

    console.log("Running left()");

    let left = col.charCodeAt(0); //converts the letter from 'a' to 'h' (denoting column) to ASCII equivalent (numbers from 97 to 104).

    // 2 steps left (subtraction)
    left = left - sideSteps;

    //up
    let up = parseInt(row) + verticalSteps;
    //down
    let down = parseInt(row) - verticalSteps;

    if (left >= aAscii) {
      // if column - moves
      left = String.fromCharCode(left);
      if (up <= boardSize) {
        allowedMoves.set("leftUp", left + up);
        console.log("leftUp: " + "row = " + up + ", " + " col = " + left);
      }
      if (down > 0) {
        allowedMoves.set("leftDown", left + down);
        console.log("leftDown: " + "row = " + down + ", " + " col = " + left);
      }
    }
    console.log("left() ended.");
  }

  right(row, col) {
    var verticalSteps = 1;
    var sideSteps = 2;

    console.log("Running right()");

    let right = col.charCodeAt(0);
    // 2 steps right (addition)
    right = right + sideSteps;

    //up
    let up = parseInt(row) + verticalSteps;

    //down
    let down = parseInt(row) - verticalSteps;

    if (right <= hAscii) {
      right = String.fromCharCode(right);

      if (up <= boardSize) {
        allowedMoves.set("rightUp", right + up);
        console.log("rightUp: " + "row = " + up + ", " + " col = " + right);
      }
      if (down > 0) {
        allowedMoves.set("rightDown", right + down);
        console.log("rightDown: " + "row = " + down + ", " + " col = " + right);
      }
    }
    console.log("right() ended.");
  }

  down(row, col) {
    var downSteps = 2;
    var sideSteps = 1;

    console.log("Running down()");
    // 2 steps/rows down
    let down = parseInt(row) - downSteps;

    // left
    let left = col.charCodeAt(0);
    left = left - sideSteps;

    //right
    let right = col.charCodeAt(0);
    right = right + sideSteps;

    if (down > 0) {
      if (right <= hAscii) {
        right = String.fromCharCode(right);
        allowedMoves.set("downRight", right + down);
        console.log("downRight: " + "row = " + down + ", " + " col = " + right);
      }
      if (left >= aAscii) {
        left = String.fromCharCode(left);
        allowedMoves.set("downLeft", left + down);
        console.log("downLeft: " + "row = " + down + ", " + " col = " + left);
      }
    }
    console.log("down() finished.");
  }

  up(row, col) {
    var upSteps = 2; // a knight's upward movement would require going 2 rows upwards
    var sideSteps = 1; // it would also include moving a step/column to either the left or right direction.

    console.log("Running up()");

    // 2 steps upward (current_piece_row + add_2_rows)
    let up = parseInt(row) + upSteps;

    // 1 step to the right (current_piece_row + add_1_col)
    let right = col.charCodeAt(0); // we convert letters a to h into ASCII equivalent and pass to 'right' variable.
    right = right + sideSteps; // add 1 to column ASCII value.

    // 1 step to the left (current_piece_row + minus_1_col)
    let left = col.charCodeAt(0);
    left = left - sideSteps; // minus 1 from column ASCII value.

    if (up <= boardSize) {
      // TRUE - if the value of UP is less than, or equal to, 8 (which is the maximum number of rows on a chessboard).
      if (left >= aAscii) {
        // TRUE - if left greater than or equal to 97 (a in ASCII)
        left = String.fromCharCode(left); // Turning left back into a string
        allowedMoves.set("upLeft", left + up); // Add to list of allowed moves
        console.log("upLeft: " + "row = " + up + ", " + " col = " + left);
      }
      if (right <= hAscii) {
        // TRUE - if right less than or equal to 104 (h in ASCII)
        right = String.fromCharCode(right);
        allowedMoves.set("upRight", right + up);
        console.log("upRight: " + "row = " + up + ", " + " col = " + right);
      }
    }
    console.log("up() finished.");
  }
}
