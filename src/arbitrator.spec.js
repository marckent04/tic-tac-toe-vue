import { describe, it, expect, beforeEach } from "vitest";
import { Arbitrator } from "./arbitrator";

describe("Tic tac toe arbitrator", () => {
  /**
   * @type {Arbitrator}
   */
  let arbitrator;

  beforeEach(() => {
    arbitrator = new Arbitrator();
  });

  it("We have no winner", () => {
    expect(arbitrator.isGameWinner([])).toBeFalsy();
  });

  it("We have a winner", () => {
    expect(arbitrator.isGameWinner([1, 2, 3])).toBeTruthy();
  });

  it("player played 3 horizontal cases", () => {
    expect(arbitrator.isHorizontalWin([1, 2, 3])).toBeTruthy();
  });

  it("player not played 3 successives number but not horizontal cases", () => {
    expect(arbitrator.isHorizontalWin([1, 4, 5, 8, 3])).toBeFalsy();
  });

  it("player played 3 horizontal cases numbers after many plays", () => {
    expect(arbitrator.isHorizontalWin([1, 4, 7, 6, 5])).toBeTruthy();
  });

  it("player played 3 diagonal cases at first turns", () => {
    expect(arbitrator.isDiagonalWin([1, 5, 9])).toBeTruthy();
  });

  it("player played 3 diagonal cases after many turns", () => {
    expect(arbitrator.isDiagonalWin([1, 2, 5, 9])).toBeTruthy();
  });

  it("player played inversed diagonal", () => {
    expect(arbitrator.isDiagonalWin([3, 5, 7])).toBeTruthy();
  });

  it("player played 3 vertical cases at first turns", () => {
    expect(arbitrator.isVerticalWin([1, 4, 7])).toBeTruthy();
  });

  it("player played 3 vertical cases after many turns", () => {
    expect(arbitrator.isVerticalWin([1, 3, 4, 7])).toBeTruthy();
  });
});
