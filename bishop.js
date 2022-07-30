import chessPiece from "/chessPiece.js";

export default class Bishop extends chessPiece {
  step;
  constructor() {
    super("bishop");
    this.step = 1;
    this.img.id = "bishop";
    this.img.src = "img/blackBishop.webp";
  }

  upRightDiag(row, col) {
    let up = row + this.step;
    let right = col.charCodeAt(0) + this.step;

    for (let i = 0; i < this.boardSize; i++) {
      // right up
      if (up <= this.boardSize && right <= this.hAscii) {
        let rightStr = String.fromCharCode(right);
        this.allowedMoves.push(rightStr + up);
      }
      up++;
      right++;
    }
  }

  downRightDiag(row, col) {
    let down = row - this.step;
    let right = col.charCodeAt(0) + this.step;

    for (let i = 0; i < this.boardSize; i++) {
      // right down
      if (down > 0 && right <= this.hAscii) {
        let rightStr = String.fromCharCode(right);
        this.allowedMoves.push(rightStr + down);
      }
      down--;
      right++;
    }
  }

  upLeftDiag(row, col) {
    let up = row + this.step;
    let left = col.charCodeAt(0) - this.step;

    for (let i = 0; i < this.boardSize; i++) {
      // left up
      if (up <= this.boardSize && left >= this.aAscii) {
        let leftStr = String.fromCharCode(left);
        this.allowedMoves.push(leftStr + up);
      }
      up++;
      left--;
    }
  }

  downLeftDiag(row, col) {
    let down = row - this.step;
    let left = col.charCodeAt(0) - this.step;

    for (let i = 0; i < this.boardSize; i++) {
      // left down
      if (down > 0 && left >= this.aAscii) {
        let leftStr = String.fromCharCode(left);
        this.allowedMoves.push(leftStr + down);
      }
      down--;
      left--;
    }
  }

  /**
   * Checks piece's current available moves
   */
  checkMoves(row, col) {
    super.clearMoves();
    this.upLeftDiag(row, col);
    this.downLeftDiag(row, col);
    this.upRightDiag(row, col);
    this.downRightDiag(row, col);
  }
}
