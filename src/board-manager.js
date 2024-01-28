import { Arbitrator } from "./arbitrator";

/**
 * @typedef {BoardManager}
 * @property {String[]} oPlays
 * @property {String[]} xPlays
 * @property {Arbitrator} arbitrator
 */
export class BoardManager {
  oPlays = [];
  xPlays = [];

  arbitror;
  /**
   * @returns {number}
   */

  constructor() {
    this.arbitror = new Arbitrator();
  }
  getCurrentTurn() {
    const totalPlays = this.oPlays.length + this.xPlays.length;
    return totalPlays + 1;
  }

  /**
   *
   * @param {number} caseNumber
   * @returns {void}
   */
  addPlay(caseNumber) {
    if (this.isNumberAlreadyPlay(caseNumber) || this.getWinner()) {
      return;
    }

    const isEvenTurn = this.getCurrentTurn() % 2 === 0;

    if (isEvenTurn) {
      this.oPlays.push(caseNumber);
      return;
    }

    this.xPlays.push(caseNumber);
  }

  getTurnPlayer() {
    return this.getCurrentTurn() % 2 === 0 ? "o" : "x";
  }

  /**
   *
   * @param {Number} caseNumber
   * @returns {Boolean}
   */
  isNumberAlreadyPlay(caseNumber) {
    return [...this.oPlays, ...this.xPlays].includes(caseNumber);
  }

  getWinner() {
    if (this.isPlaysWinner(this.xPlays)) {
      return "x";
    }

    if (this.isPlaysWinner(this.oPlays)) {
      return "o";
    }
  }

  isEndGame() {
    return this.getWinner() || [...this.oPlays, ...this.xPlays].length === 9;
  }

  isPlaysWinner(plays) {
    return this.arbitror.isGameWinner(plays);
  }

  /**
   *
   * @param {Number} caseNumber
   * @returns {String|undefined}
   */
  getCasePlayer(caseNumber) {
    if (this.xPlays.includes(caseNumber)) {
      return "x";
    }

    if (this.oPlays.includes(caseNumber)) {
      return "o";
    }
  }
  reset() {
    this.oPlays = [];
    this.xPlays = [];
  }
}
