<script setup>
import { computed, ref } from "vue";
import { BoardManager } from "./board-manager";

const board = ref(new BoardManager());

/**
 *
 * @param {Number} caseNumber
 * @returns {String}
 */
function caseContent(caseNumber) {
  return board.value.getCasePlayer(caseNumber) ?? "";
}

const gameState = computed(() => {
  const winner = board.value.getWinner();

  if (winner) {
    return `Player ${winner} wins`;
  }

  if (board.value.isEndGame()) {
    return "Equality";
  }

  return `Player ${board.value.getTurnPlayer().toUpperCase()}'s turn`;
});
</script>
<template>
  <div
    class="h-full w-full flex flex-col justify-center items-center text-white"
  >
    <div class="mb-6 space-y-3 text-center">
      <h1 class="text-4xl">Tic-Tae-Toe</h1>
      <h1 class="text-2xl" v-text="gameState"></h1>
      <button
        class="h-10 px-5 rounded-none bg-blue-500"
        @click="board.reset()"
        v-show="board.isEndGame()"
      >
        Play again
      </button>
    </div>
    <div class="board">
      <div
        class="case"
        :class="{
          'text-red-500': board.getCasePlayer(i) == 'o',
          'text-green-700': board.getCasePlayer(i) == 'x',
        }"
        v-for="i in 9"
        :key="'case-' + i"
        @click="board.addPlay(i)"
        v-text="caseContent(i)"
      ></div>
    </div>
  </div>
</template>

<style>
.board {
  @apply grid grid-cols-3 grid-rows-3 gap-0 border-white;
}
.case {
  @apply flex justify-center items-center border-2 h-36 w-36 text-white text-5xl;
}
</style>
