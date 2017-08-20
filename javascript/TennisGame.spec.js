//
// The tests.
//
import assert from 'assert';
import { default as TennisGame } from './TennisGame1';
// import { default as TennisGame } from './TennisGame2';

var allScores = [
  [0, 0, "Res-Tot"],
  [1, 1, "Quinze-Tot"],
  [2, 2, "Trenta-Tot"],
  [3, 3, "Iguals"],
  [4, 4, "Iguals"],

  [1, 0, "Quinze-Res"],
  [0, 1, "Res-Quinze"],
  [2, 0, "Trenta-Res"],
  [0, 2, "Res-Trenta"],
  [3, 0, "Quaranta-Res"],
  [0, 3, "Res-Quaranta"],
  [4, 0, "Victoria de jugador1"],
  [0, 4, "Victoria de jugador2"],

  [2, 1, "Trenta-Quinze"],
  [1, 2, "Quinze-Trenta"],
  [3, 1, "Quaranta-Quinze"],
  [1, 3, "Quinze-Quaranta"],
  [4, 1, "Victoria de jugador1"],
  [1, 4, "Victoria de jugador2"],

  [3, 2, "Quaranta-Trenta"],
  [2, 3, "Trenta-Quaranta"],
  [4, 2, "Victoria de jugador1"],
  [2, 4, "Victoria de jugador2"],

  [4, 3, "Avantatge jugador1"],
  [3, 4, "Avantatge jugador2"],
  [5, 4, "Avantatge jugador1"],
  [4, 5, "Avantatge jugador2"],
  [15, 14, "Avantatge jugador1"],
  [14, 15, "Avantatge jugador2"],

  [6, 4, "Victoria de jugador1"],
  [4, 6, "Victoria de jugador2"],
  [16, 14, "Victoria de jugador1"],
  [14, 16, "Victoria de jugador2"]
];

var checkScore = function(jugador1Score, jugador2Score, expectedScore) {
  var highestScore = Math.max(jugador1Score, jugador2Score);
  try {
    var game = new TennisGame();
    for (var i = 0; i < highestScore; i++) {
      if (i < jugador1Score) {
        game.wonPoint('jugador1');
      }
      if (i < jugador2Score) {
        game.wonPoint('jugador2');
      }
    }
    if (game.getScore() === expectedScore) {
      return true;
    }
  } catch (ex) {}
  return false;
};

describe('tennis game', function() {

  allScores.forEach(function(score) {
    it(score[2], function() {
      assert.ok(checkScore(score[0], score[1], score[2]), 'scores: ' + score);
    });
  });

});