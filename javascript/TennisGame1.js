var TennisGame1 = function (jugador1Name, jugador2Name) {
  this.numScore1 = 0
  this.numScore2 = 0
  this.jugador1Name = jugador1Name
  this.jugador2Name = jugador2Name
}

TennisGame1.prototype.mapNumScoreToText = [
  'Res',
  'Quinze',
  'Trenta',
  'Quaranta'
]

TennisGame1.prototype.mapNumScoreEqualToText = [
  'Res-Tot',
  'Quinze-Tot',
  'Trenta-Tot'
]

TennisGame1.prototype.addPointToPlayer1 = function () {
  this.numScore1 += 1
}

TennisGame1.prototype.addPointToPlayer2 = function () {
  this.numScore2 += 1
}

TennisGame1.prototype.getScore = function () {
  var score = ''
  if (this.numScore1 === this.numScore2) {
    score = this.mapNumScoreEqualToText[this.numScore1] || 'Iguals'
  } else if (this.numScore1 >= 4 || this.numScore2 >= 4) {
    score = this.getAdvantageOrVictory()
  } else {
    score += this.mapNumScoreToText[this.numScore1]
    score += '-'
    score += this.mapNumScoreToText[this.numScore2]
  }
  return score
}

TennisGame1.prototype.getAdvantageOrVictory = function () {
  let score = ''
  var minusResult = this.numScore1 - this.numScore2
  if (minusResult === 1) score = 'Avantatge jugador1'
  else if (minusResult === -1) score = 'Avantatge jugador2'
  else if (minusResult >= 2) score = 'Victoria de jugador1'
  else score = 'Victoria de jugador2'
  return score
}

if (typeof window === 'undefined') {
  module.exports = TennisGame1
}
