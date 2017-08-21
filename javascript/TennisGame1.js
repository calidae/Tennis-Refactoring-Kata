var TennisGame1 = function (jugador1Name = 'jugador1', jugador2Name = 'jugador2') {
  this.numScore1 = 0
  this.numScore2 = 0
  this.jugador1Name = jugador1Name
  this.jugador2Name = jugador2Name
}

const mapScoreToText = [
  'Res',
  'Quinze',
  'Trenta',
  'Quaranta'
]

const mapScoreEqualToText = [
  'Res-Tot',
  'Quinze-Tot',
  'Trenta-Tot'
]

const equalsText = 'Iguals'
const advantageText = 'Avantatge '
const victoryText = 'Victoria de '

const minWinningScore = 4
const minWinningDiff = 2

TennisGame1.prototype.addPointToPlayer1 = function () {
  this.numScore1 += 1
}

TennisGame1.prototype.addPointToPlayer2 = function () {
  this.numScore2 += 1
}

TennisGame1.prototype.getScore = function () {
  let score
  if (this.areTied()) {
    score = this.getTiedText()
  } else if (this.isAnyPlayerWinning()) {
    score = this.getAdvantageOrVictory()
  } else {
    score = this.getNormalScores()
  }
  return score
}

TennisGame1.prototype.getNormalScores = function () {
  return `${mapScoreToText[this.numScore1]}-${mapScoreToText[this.numScore2]}`
}

TennisGame1.prototype.getTiedText = function () {
  return mapScoreEqualToText[this.numScore1] || equalsText
}

TennisGame1.prototype.areTied = function () {
  return this.numScore1 === this.numScore2
}

TennisGame1.prototype.isAnyPlayerWinning = function () {
  return this.numScore1 >= minWinningScore || this.numScore2 >= minWinningScore
}

TennisGame1.prototype.getAdvantageOrVictory = function () {
  const minusResult = this.numScore1 - this.numScore2
  const status = Math.abs(minusResult) >= minWinningDiff ? victoryText : advantageText
  const player = minusResult > 0 ? this.jugador1Name : this.jugador2Name
  return status + player
}

if (typeof window === 'undefined') {
  module.exports = TennisGame1
}
