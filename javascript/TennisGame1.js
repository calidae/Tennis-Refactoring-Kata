var TennisGame1 = function (jugador1Name = 'jugador1', jugador2Name = 'jugador2') {
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
  var minusResult = this.numScore1 - this.numScore2
  const status = Math.abs(minusResult) >= 2 ? 'Victoria de ' : 'Avantatge '
  const player = minusResult > 0 ? this.jugador1Name : this.jugador2Name
  return status + player
}

if (typeof window === 'undefined') {
  module.exports = TennisGame1
}
