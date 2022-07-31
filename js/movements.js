export default class Movements {
  constructor() {
    this.aAscii = 97;
    this.hAscii = 104;
    this.boardSize = 8;
    this.oneStep = 1;
    this.allowedMoves = [];
  }

  getAllowedMoves() {
    return this.allowedMoves;
  }
  reset() {
    this.allowedMoves = [];
  }

  horizontal(row, col) {
    let left = col.charCodeAt(0);
    left = left - this.oneStep;
    let right = col.charCodeAt(0);
    right = right + this.oneStep;

    while (left >= this.aAscii) {
      let leftStr = String.fromCharCode(left);
      this.allowedMoves.push(leftStr + row);
      left--;
    }

    while (right <= this.hAscii) {
      let rightStr = String.fromCharCode(right);
      this.allowedMoves.push(rightStr + row);
      right++;
    }
  }

  vertical(row, col) {
    let down = row - this.oneStep;
    let up = row + this.oneStep;
    while (down > 0) {
      this.allowedMoves.push(col + down);
      down--;
    }

    while (up <= this.boardSize) {
      this.allowedMoves.push(col + up);
      up++;
    }
  }

  leftOneStep(row, col) {
    let left = col.charCodeAt(0);
    left = left - this.oneStep;

    if (left >= this.aAscii) {
      left = String.fromCharCode(left);
      this.allowedMoves.push(left + row);
    }
  }

  rightOneStep(row, col) {
    let right = col.charCodeAt(0);
    right = right + this.oneStep;

    if (right <= this.hAscii) {
      right = String.fromCharCode(right);
      this.allowedMoves.push(right + row);
    }
  }

  downOneStep(row, col) {
    let down = row - this.oneStep;

    if (down > 0) {
      this.allowedMoves.push(col + down);
    }
  }

  upOneStep(row, col) {
    let up = row + this.oneStep;

    if (up <= this.boardSize) {
      this.allowedMoves.push(col + up);
    }
  }

  upLeft(row, col) {
    let up = row + this.oneStep;
    let left = col.charCodeAt(0);
    left = left - this.oneStep;

    if (left >= this.aAscii && up <= this.boardSize) {
      let leftStr = String.fromCharCode(left);
      this.allowedMoves.push(leftStr + up);
    }
  }

  downRight(row, col) {
    let down = row - this.oneStep;
    let right = col.charCodeAt(0);
    right = right + this.oneStep;

    if (right <= this.hAscii && down > 0) {
      let rightStr = String.fromCharCode(right);
      this.allowedMoves.push(rightStr + down);
    }
  }

  downLeft(row, col) {
    let down = row - this.oneStep;
    let left = col.charCodeAt(0);
    left = left - this.oneStep;

    if (left >= this.aAscii && down > 0) {
      let leftStr = String.fromCharCode(left);
      this.allowedMoves.push(leftStr + down);
    }
  }

  upRight(row, col) {
    let up = row + this.oneStep;
    let right = col.charCodeAt(0);
    right = right + this.oneStep;

    if (right <= this.hAscii && up <= this.boardSize) {
      let rightStr = String.fromCharCode(right);
      this.allowedMoves.push(rightStr + up);
    }
  }

  upRightDiag(row, col) {
    let up = row + this.oneStep;
    let right = col.charCodeAt(0) + this.oneStep;
    while (up <= this.boardSize && right <= this.hAscii) {
      let rightStr = String.fromCharCode(right);
      this.allowedMoves.push(rightStr + up);
      up++;
      right++;
    }
  }

  downRightDiag(row, col) {
    let down = row - this.oneStep;
    let right = col.charCodeAt(0) + this.oneStep;
    while (down > 0 && right <= this.hAscii) {
      let rightStr = String.fromCharCode(right);
      this.allowedMoves.push(rightStr + down);
      down--;
      right++;
    }
  }

  upLeftDiag(row, col) {
    let up = row + this.oneStep;
    let left = col.charCodeAt(0) - this.oneStep;
    while (up <= this.boardSize && left >= this.aAscii) {
      let leftStr = String.fromCharCode(left);
      this.allowedMoves.push(leftStr + up);
      up++;
      left--;
    }
  }

  downLeftDiag(row, col) {
    let down = row - this.oneStep;
    let left = col.charCodeAt(0) - this.oneStep;
    while (down > 0 && left >= this.aAscii) {
      let leftStr = String.fromCharCode(left);
      this.allowedMoves.push(leftStr + down);
      down--;
      left--;
    }
  }

  knightLeft(row, col) {
    let verticalStep = 1;
    let horizontalSteps = 2;

    let left = col.charCodeAt(0);
    left = left - horizontalSteps;
    let up = row + verticalStep;
    let down = row - verticalStep;

    if (left >= this.aAscii) {
      left = String.fromCharCode(left);
      if (up <= this.boardSize) {
        this.allowedMoves.push(left + up);
      }
      if (down > 0) {
        this.allowedMoves.push(left + down);
      }
    }
  }

  knightRight(row, col) {
    let verticalSteps = 1;
    let horizontalSteps = 2;

    let right = col.charCodeAt(0);
    right = right + horizontalSteps;
    let up = row + verticalSteps;
    let down = row - verticalSteps;

    if (right <= this.hAscii) {
      right = String.fromCharCode(right);

      if (up <= this.boardSize) {
        this.allowedMoves.push(right + up);
      }
      if (down > 0) {
        this.allowedMoves.push(right + down);
      }
    }
  }

  knightDown(row, col) {
    let horizontalSteps = 1;
    let verticalSteps = 2;
    let down = row - verticalSteps;
    let left = col.charCodeAt(0);
    left = left - horizontalSteps;
    let right = col.charCodeAt(0);
    right = right + horizontalSteps;

    if (down > 0) {
      if (right <= this.hAscii) {
        right = String.fromCharCode(right);
        this.allowedMoves.push(right + down);
      }
      if (left >= this.aAscii) {
        left = String.fromCharCode(left);
        this.allowedMoves.push(left + down);
      }
    }
  }

  /**
   * (1) a knight's upward movement would require going 2 rows upwards
   * (2) it would also include moving a step/column to either the left or right direction.
   * (3) 2 steps upward (current_piece_row + add_2_rows)
   * (4) we convert letters a to h into ASCII equivalent and pass to 'right' letiable.
   * (5) 1 step to the right (current_piece_row + add_1_col)
   * (6) then add 1 to column ASCII value.
   * (7) This results in, 1 step to the left (current_piece_row + minus_1_col)
   * (9) (up <= this.boardSize) is TRUE - if the value of UP is less than, or equal to, 8
   *     (which is the maximum number of rows on a chessboard).
   * (10) (left >= this.aAscii) is TRUE - if left greater than or equal to 97 (a in ASCII)
   * (11) After the calculation left is turned back into a string
   *      Then added to list of allowed moves
   * (13) And for the right side (right <= this.hAscii) is TRUE - if right is less than or equal to 104 (h in ASCII)
   * @param {number} row
   * @param {string} col
   */
  knightUp(row, col) {
    /*1*/ let verticalSteps = 2;
    /*2*/ let horizontalSteps = 1;
    /*3*/ let up = row + verticalSteps;
    /*4*/ let right = col.charCodeAt(0);
    /*5*/ right = right + horizontalSteps;
    /*6*/ let left = col.charCodeAt(0);
    /*7*/ left = left - horizontalSteps;

    if (up <= this.boardSize) {
      if (left >= this.aAscii) {
        /*11*/ left = String.fromCharCode(left);
        this.allowedMoves.push(left + up);
      }
      if (right <= this.hAscii) {
        right = String.fromCharCode(right);
        this.allowedMoves.push(right + up);
      }
    }
  }
}
