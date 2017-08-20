var TennisGame3 = function(p1N, p2N) {
    this.p2 = 0;
    this.p1 = 0;

    this.p1N = p1N;
    this.p2N = p2N;
};

TennisGame3.prototype.getScore = function() {
    var s;
    if ((this.p1 < 4 && this.p2 < 4) && (this.p1 + this.p2 < 6)) {
        var p = ["Res", "Quinze", "Trenta", "Quaranta"];
        s = p[this.p1];
        return (this.p1 == this.p2) ? s + "-All" : s + "-" + p[this.p2];
    } else {
        if (this.p1 == this.p2)
            return "Iguals";
        s = this.p1 > this.p2 ? this.p1N : this.p2N;
        return ((this.p1 - this.p2) * (this.p1 - this.p2) == 1) ? "Avantatge " + s : "Victoria de " + s;
    }
};

TennisGame3.prototype.wonPoint = function(playerName) {
    if (playerName == "jugador1")
        this.p1 += 1;
    else
        this.p2 += 1;

};

if (typeof window === "undefined") {
    module.exports = TennisGame3;
}
