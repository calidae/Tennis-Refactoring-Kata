var TennisGame2 = function(jugador1Name, jugador2Name) {
    this.P1point = 0;
    this.P2point = 0;

    this.P1res = "";
    this.P2res = "";

    this.jugador1Name = jugador1Name;
    this.jugador2Name = jugador2Name;
};

TennisGame2.prototype.getScore = function() {
    var score = "";

    if (this.P1point === this.P2point && this.P1point < 3) {
        if (this.P1point === 0)
            score = "Res";
        if (this.P1point === 1)
            score = "Quinze";
        if (this.P1point === 2)
            score = "Trenta";
        score += "-All";
    }
    if (this.P1point === this.P2point && this.P1point > 2)
        score = "Iguals";

    if (this.P1point > 0 && this.P2point === 0) {
        if (this.P1point === 1)
            this.P1res = "Quinze";
        if (this.P1point === 2)
            this.P1res = "Trenta";
        if (this.P1point === 3)
            this.P1res = "Quaranta";

        this.P2res = "Res";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.P2point > 0 && this.P1point === 0) {
        if (this.P2point === 1)
            this.P2res = "Quinze";
        if (this.P2point === 2)
            this.P2res = "Trenta";
        if (this.P2point === 3)
            this.P2res = "Quaranta";

        this.P1res = "Res";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.P1point > this.P2point && this.P1point < 4) {
        if (this.P1point === 2)
            this.P1res = "Trenta";
        if (this.P1point === 3)
            this.P1res = "Quaranta";
        if (this.P2point === 1)
            this.P2res = "Quinze";
        if (this.P2point === 2)
            this.P2res = "Trenta";
        score = this.P1res + "-" + this.P2res;
    }
    if (this.P2point > this.P1point && this.P2point < 4) {
        if (this.P2point === 2)
            this.P2res = "Trenta";
        if (this.P2point === 3)
            this.P2res = "Quaranta";
        if (this.P1point === 1)
            this.P1res = "Quinze";
        if (this.P1point === 2)
            this.P1res = "Trenta";
        score = this.P1res + "-" + this.P2res;
    }

    if (this.P1point > this.P2point && this.P2point >= 3) {
        score = "Avantatge jugador1";
    }

    if (this.P2point > this.P1point && this.P1point >= 3) {
        score = "Avantatge jugador2";
    }

    if (this.P1point >= 4 && this.P2point >= 0 && (this.P1point - this.P2point) >= 2) {
        score = "Victoria de jugador1";
    }
    if (this.P2point >= 4 && this.P1point >= 0 && (this.P2point - this.P1point) >= 2) {
        score = "Victoria de jugador2";
    }
    return score;
};

TennisGame2.prototype.SetP1Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P1Score();
    }
};

TennisGame2.prototype.SetP2Score = function(number) {
    var i;
    for (i = 0; i < number; i++) {
        this.P2Score();
    }
};

TennisGame2.prototype.P1Score = function() {
    this.P1point++;
};

TennisGame2.prototype.P2Score = function() {
    this.P2point++;
};

TennisGame2.prototype.wonPoint = function(player) {
    if (player === "jugador1")
        this.P1Score();
    else
        this.P2Score();
};

if (typeof window === "undefined") {
    module.exports = TennisGame2;
}