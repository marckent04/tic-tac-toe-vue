import { describe, it, expect, beforeEach } from "vitest";
import { BoardManager } from "./board-manager";

describe("Tic tac toe board manager", () => {
  /**
   * @type {BoardManager}
   */
  let manager;

  beforeEach(() => {
    manager = new BoardManager();
  });
  it("Players plays should be empty at game begin", () => {
    expect(manager.oPlays).toEqual([]);
    expect(manager.xPlays).toEqual([]);
    expect(manager.getCurrentTurn()).toEqual(1);
  });

  it("Should save X player play when turn is odd", () => {
    manager.addPlay(9);
    expect(manager.xPlays).toEqual([9]);
    expect(manager.oPlays).toEqual([]);
  });

  it("Should save O player play when turn is even", () => {
    manager.addPlay(9);
    manager.addPlay(6);
    manager.addPlay(1);
    manager.addPlay(2);

    expect(manager.oPlays).toEqual([6, 2]);
  });

  it("Should not play same number two times", () => {
    manager.addPlay(9);
    manager.addPlay(9);
    manager.addPlay(9);

    expect(manager.xPlays).toEqual([9]);
    expect(manager.oPlays).toEqual([]);
  });

  describe("win cases", () => {
    it("We habe no winner", () => {
      expect(manager.getWinner()).toBeUndefined();
    });

    it("player 'X' have 3 successive cases numbers", () => {
      manager.xPlays = [1, 2, 3];

      expect(manager.getWinner()).toEqual("x");
    });

    it("player 'O' have 3 successive cases numbers", () => {
      manager.oPlays = [1, 2, 3];

      expect(manager.getWinner()).toEqual("o");
    });

    it("player have 3 succesive cases numbers after many plays", () => {
      manager.xPlays = [1, 4, 7, 6, 5];

      expect(manager.getWinner()).toEqual("x");
    });

    it("player played 3 diagonal cases at first turns", () => {
      manager.xPlays = [1, 5, 9];
      expect(manager.getWinner()).toEqual("x");
    });

    it("player played 3 diagonal cases after many turns", () => {
      manager.xPlays = [1, 2, 5, 9];
      expect(manager.getWinner()).toEqual("x");
    });

    it("player played inversed diagonal", () => {
      manager.xPlays = [3, 5, 7];
      expect(manager.getWinner()).toEqual("x");
    });

    it("player played 3 vertical cases at first turns", () => {
      manager.xPlays = [1, 4, 7];
      expect(manager.getWinner()).toEqual("x");
    });

    it("player played 3 vertical cases after many turns", () => {
      manager.xPlays = [1, 3, 4, 7];
      expect(manager.getWinner()).toEqual("x");
    });
  });
});
