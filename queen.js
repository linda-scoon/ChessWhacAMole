import chessPiece from "/chessPiece.js";

export default class Queen extends chessPiece {
  aAscii = 97;
  hAscii = 104;
  boardSize = 8;
  allowedMoves = new Map();

  constructor() {
    super("queen");

    this.img = document.createElement("img");
    this.img.draggable = true;
    this.img.id = "queen";
    this.img.src = "img/blackQueen.webp";
    this.row;
    this.col;
  }

  getAllowedMovesQueen() {
    return allowedMoves;
  }

  left(row, col) {
    var sideSteps = 1;

    console.log("Queen Running left()");

    let left = col.charCodeAt(0); //converts the letter from 'a' to 'h' (denoting column) to ASCII equivalent (numbers from 97 to 104).

    //  1 step left (subtraction)
    left = left - sideSteps;

    if (left >= aAscii) {
      // if column is valid then position is allowed move
      left = String.fromCharCode(left);
      console.log("left: " + "row = " + row + ", " + "col = " + left);

      allowedMoves.set("left", left + row);
    }
    console.log("Queen left() ended.");
  }

  right(row, col) {
    var sideSteps = 1;

    console.log("Queen Running right()");

    let right = col.charCodeAt(0);

    // 1 step right (addition)
    right = right + sideSteps;

    if (right <= hAscii) {
      right = String.fromCharCode(right);
      console.log("right: " + "row = " + row + ", " + "col = " + right);

      allowedMoves.set("right", right + row);
    }
    console.log("Queen right() ended.");
  }

  down(row, col) {
    var downSteps = 1;

    console.log("Queen Running down()");

    // 1 step/rows down
    let down = parseInt(row) - downSteps;

    if (down > 0) {
      console.log("down: " + "row = " + down + ", " + "col = " + col);

      allowedMoves.set("down", col + down);
    }
    console.log("down() finished.");
  }

  up(row, col) {
    var upSteps = 1; // a queen can move 1 step upward

    console.log("Queen Running up()");

    // 1 step upward (current_piece_row + add_1_row)
    let up = parseInt(row) + upSteps;

    if (up <= boardSize) {
      // TRUE - if the value of UP is less than, or equal to, 8 (which is the maximum number of rows on a chessboard).
      allowedMoves.set("Queen up", up, col);
      console.log("Queen up: row = " + up + ", " + " col = " + col);
      allowedMoves.set("up", col + up);
    }
    console.log("Queen up() finished.");
  }

  /**
   * Checks piece's current available moves
   */
  checkMoves(col, row) {
    console.log("Queen checkMoves(col,row) started.");

    allowedMoves.clear();
    console.log("Queen allowedMoves variable cleared.");

    //up
    this.up(row, col);

    //down
    this.down(row, col);

    //right
    this.right(row, col);

    // left
    this.left(row, col);

    //pass allowed moves back to parent class
    super.setAllowedMoves(this.getAllowedMovesQueen());
  }
}
