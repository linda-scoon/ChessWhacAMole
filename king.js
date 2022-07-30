import chessPiece from "/chessPiece.js";

let aAscii = 97;
let hAscii = 104;
let boardSize = 8;
const allowedMoves = new Map();

export class King extends chessPiece {
  constructor() {
    super("king");

    this.img = document.createElement("img");
    this.img.draggable = true;
    this.img.id = "king";
    this.img.src = "img/blackKing.webp";
    this.row;
    this.col;
  }

  getAllowedMovesKing() {
    return allowedMoves;
  }

  left(row, col) {
    var sideSteps = 1;

    console.log("King Running left()");

    let left = col.charCodeAt(0); //converts the letter from 'a' to 'h' (denoting column) to ASCII equivalent (numbers from 97 to 104).

    //  1 step left (subtraction)
    left = left - sideSteps;

    if (left >= aAscii) {
      // if column is valid then position is allowed move
      left = String.fromCharCode(left);
      console.log("left: " + "row = " + row + ", " + "col = " + left);

      allowedMoves.set("left", left + row);
    }
    console.log("King left() ended.");
  }

  right(row, col) {
    var sideSteps = 1;

    console.log("King Running right()");

    let right = col.charCodeAt(0);

    // 1 step right (addition)
    right = right + sideSteps;

    if (right <= hAscii) {
      right = String.fromCharCode(right);
      console.log("right: " + "row = " + row + ", " + "col = " + right);

      allowedMoves.set("right", right + row);
    }
    console.log("King right() ended.");
  }

  down(row, col) {
    var downSteps = 1;

    console.log("King Running down()");

    // 1 step/rows down
    let down = parseInt(row) - downSteps;

    if (down > 0) {
      console.log("down: " + "row = " + down + ", " + "col = " + col);

      allowedMoves.set("down", col + down);
    }
    console.log("down() finished.");
  }

  up(row, col) {
    var upSteps = 1; // a king can move 1 step upward

    console.log("King Running up()");

    // 1 step upward (current_piece_row + add_1_row)
    let up = parseInt(row) + upSteps;

    if (up <= boardSize) {
      // TRUE - if the value of UP is less than, or equal to, 8 (which is the maximum number of rows on a chessboard).
      allowedMoves.set("King up", up, col);
      console.log("King up: row = " + up + ", " + " col = " + col);
      allowedMoves.set("up", col + up);
    }
    console.log("King up() finished.");
  }

  /**
   * Checks piece's current available moves
   */
  checkMoves(col, row) {
    console.log("King checkMoves(col,row) started.");

    allowedMoves.clear();
    console.log("King allowedMoves variable cleared.");

    //up
    this.up(row, col);

    //down
    this.down(row, col);

    //right
    this.right(row, col);

    // left
    this.left(row, col);

    //pass allowed moves back to parent class
    super.setAllowedMoves(this.getAllowedMovesKing());
  }
}
