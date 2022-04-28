let aAscii = 97;
let hAscii = 104;
let boardSize = 8;
const allowedMoves = new Map();

export default class Knight {
  constructor() {
    this.img = document.createElement("img");
    this.img.draggable = true;
    this.img.id = "knight";
    this.img.src = "img/blackKnight.webp";
    this.row;
    this.col;
  }

  checkMoves(col, row) {
    allowedMoves.clear();
    //up
    up(row, col);

    //down
    down(row, col);

    //right
    right(row, col);

    // left
    left(row, col);
  }
}
export function getAllowedMoves(){
    return allowedMoves;
}
function left(row, col) {
  let left = col.charCodeAt(0);
  left -= 2;
  //up
  let up = parseInt(row) + 1;
  //down
  let down = parseInt(row) - 1;

  if (left >= aAscii) {
    left = String.fromCharCode(left);
    if (up <= boardSize) {
      allowedMoves.set("leftUp", left + up);
    }
    if (down > 0) {
      allowedMoves.set("leftDown", left + down);
    }
  }
}

function right(row, col) {
  let right = col.charCodeAt(0);
  right += 2;
  //up
  let up = parseInt(row) + 1;
  //down
  let down = parseInt(row) - 1;

  if (right <= hAscii) {
    right = String.fromCharCode(right);
    if (up <= boardSize) {
      allowedMoves.set("rightUp", right + up);
    }
    if (down > 0) {
      allowedMoves.set("rightDown", right + down);
    }
  }
}

function down(row, col) {
  let down = parseInt(row) - 2;
  // left
  let left = col.charCodeAt(0);
  left = left - 1;
  //
  //right
  let right = col.charCodeAt(0);
  right = right + 1;

  if (down > 0) {
    if (right <= hAscii) {
      right = String.fromCharCode(right);
      allowedMoves.set("downRight", right + down);
    }
    if (left >= aAscii) {
      left = String.fromCharCode(left);
      allowedMoves.set("downLeft", left + down);
    }
  }
}

function up(row, col) {
  let up = parseInt(row) + 2;
  // right
  let right = col.charCodeAt(0);
  right = right + 1;
  //left
  let left = col.charCodeAt(0);
  left = left - 1;

  if (up <= boardSize) {
    if (left >= aAscii) {
      left = String.fromCharCode(left);
      allowedMoves.set("upLeft", left + up);
    }
    if (right <= hAscii) {
      right = String.fromCharCode(right);
      allowedMoves.set("upRight", right + up);
    }
  }
}
