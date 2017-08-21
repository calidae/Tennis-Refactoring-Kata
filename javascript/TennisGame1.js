var TennisGame1 = function (jugador1Name = 'jugador1', jugador2Name = 'jugador2') {
  this.numScore1 = 0
  this.numScore2 = 0
  this.jugador1Name = jugador1Name
  this.jugador2Name = jugador2Name
}

const mapNumScoreToText = [
  'Res',
  'Quinze',
  'Trenta',
  'Quaranta'
]

const mapNumScoreEqualToText = [
  'Res-Tot',
  'Quinze-Tot',
  'Trenta-Tot'
]

const minimumWinningScore = 4
const minimumWinningDiff = 2

TennisGame1.prototype.addPointToPlayer1 = function () {
  this.numScore1 += 1
}

TennisGame1.prototype.addPointToPlayer2 = function () {
  this.numScore2 += 1
}

TennisGame1.prototype.getScore = function () {
  var score = ''
  if (this.numScore1 === this.numScore2) {
    score = mapNumScoreEqualToText[this.numScore1] || 'Iguals'
  } else if (this.numScore1 >= minimumWinningScore || this.numScore2 >= minimumWinningScore) {
    score = this.getAdvantageOrVictory()
  } else {
    score += mapNumScoreToText[this.numScore1]
    score += '-'
    score += mapNumScoreToText[this.numScore2]
  }
  return score
}

TennisGame1.prototype.getAdvantageOrVictory = function () {
  var minusResult = this.numScore1 - this.numScore2
  const status = Math.abs(minusResult) >= minimumWinningDiff ? 'Victoria de ' : 'Avantatge '
  const player = minusResult > 0 ? this.jugador1Name : this.jugador2Name
  return status + player
}

if (typeof window === 'undefined') {
  module.exports = TennisGame1
}
