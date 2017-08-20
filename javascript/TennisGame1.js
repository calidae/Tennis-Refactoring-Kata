var TennisGame1 = function(jugador1Name, jugador2Name) {
    this.m_score1 = 0;
    this.m_score2 = 0;
    this.jugador1Name = jugador1Name;
    this.jugador2Name = jugador2Name;
};

TennisGame1.prototype.wonPoint = function(playerName) {
    if (playerName === "jugador1")
        this.m_score1 += 1;
    else
        this.m_score2 += 1;
};

TennisGame1.prototype.getScore = function() {
    var score = "";
    var tempScore = 0;
    if (this.m_score1 === this.m_score2) {
        switch (this.m_score1) {
            case 0:
                score = "Res-All";
                break;
            case 1:
                score = "Quinze-All";
                break;
            case 2:
                score = "Trenta-All";
                break;
            default:
                score = "Iguals";
                break;
        }
    } else if (this.m_score1 >= 4 || this.m_score2 >= 4) {
        var minusResult = this.m_score1 - this.m_score2;
        if (minusResult === 1) score = "Avantatge jugador1";
        else if (minusResult === -1) score = "Avantatge jugador2";
        else if (minusResult >= 2) score = "Victoria de jugador1";
        else score = "Victoria de jugador2";
    } else {
        for (var i = 1; i < 3; i++) {
            if (i === 1) tempScore = this.m_score1;
            else {
                score += "-";
                tempScore = this.m_score2;
            }
            switch (tempScore) {
                case 0:
                    score += "Res";
                    break;
                case 1:
                    score += "Quinze";
                    break;
                case 2:
                    score += "Trenta";
                    break;
                case 3:
                    score += "Quaranta";
                    break;
            }
        }
    }
    return score;
};

if (typeof window === "undefined") {
    module.exports = TennisGame1;
}