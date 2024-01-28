export class Arbitrator {
  /**
   *
   * @param {number[]} plays
   * @returns {Boolean}
   */
  isGameWinner(plays) {
    return (
      this.isHorizontalWin(plays) ||
      this.isDiagonalWin(plays) ||
      this.isVerticalWin(plays)
    );
  }

  /**
   *
   * @param {number[]} plays
   * @returns {Boolean}
   */
  isHorizontalWin(plays) {
    let isHorizontalWin = false;
    const sorted = [...plays].sort();

    for (let index = 0; index < sorted.length; index++) {
      const caseNumber = sorted[index];
      if (![1, 4, 7].includes(caseNumber)) {
        continue;
      }
      isHorizontalWin = this.isNumbersSeries(
        caseNumber,
        sorted.slice(index + 1),
        1,
      );
      if (isHorizontalWin) {
        break;
      }
    }

    return isHorizontalWin;
  }

  /**
   *
   * @param {number[]} plays
   * @returns {Boolean}
   */
  isDiagonalWin(plays) {
    let isDiagonalWin = false;
    let isInversedDiagonalWin = false;

    const sorted = [...plays].sort();

    for (let index = 0; index < sorted.length; index++) {
      isDiagonalWin = this.isNumbersSeries(
        sorted[index],
        sorted.slice(index),
        4,
      );

      if (isDiagonalWin) {
        break;
      }
    }

    if (sorted.includes(3)) {
      isInversedDiagonalWin = this.isNumbersSeries(
        3,
        sorted.slice(sorted.indexOf(3)),
        2,
      );
    }

    return isDiagonalWin || isInversedDiagonalWin;
  }

  /**
   *
   * @param {number[]} plays
   * @returns {Boolean}
   */
  isVerticalWin(plays) {
    let isVerticalWin = false;
    const sorted = [...plays].sort();

    for (let index = 0; index < sorted.length; index++) {
      isVerticalWin = this.isNumbersSeries(
        sorted[index],
        sorted.slice(index),
        3,
      );

      if (isVerticalWin) {
        break;
      }
    }

    return isVerticalWin;
  }

  /**
   *
   * @param {Number} value
   * @param {Number[]} numbers
   * @param {Number[]} diffs
   * @returns {Boolean}
   */
  isNumbersSeries(firstNumber, numbers, diff) {
    let total = 0;
    let curr = firstNumber;
    for (let index = 0; index < numbers.length; index++) {
      if (numbers[index] - curr === diff) {
        curr = numbers[index];
        total++;
      }

      if (total === 2) {
        break;
      }
    }

    return total === 2;
  }
}
