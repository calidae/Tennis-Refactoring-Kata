if (typeof TennisGame1 === "undefined") {
    var TennisGame1 = require("./TennisGame1.js");
}
if (typeof TennisGame2 === "undefined") {
    var TennisGame2 = require("./TennisGame2.js");
}
if (typeof TennisGame3 === "undefined") {
    var TennisGame3 = require("./TennisGame3.js");
}

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

var checkScore = function(reporter, TennisGame, jugador1Score, jugador2Score, expectedScore) {
    var highestScore = Math.max(jugador1Score, jugador2Score);
    var game;
    var result;
    var message = "";
    var ok = false;
    var i;

    try {
        game = new TennisGame("jugador1", "jugador2");
        for (i = 0; i < highestScore; i++) {
            if (i < jugador1Score) {
                game.wonPoint("jugador1");
            }
            if (i < jugador2Score) {
                game.wonPoint("jugador2");
            }
        }
        result = game.getScore();

        if (result === expectedScore) {
            ok = true;
        } else {
            message = "Result = '" + result + "'";
        }
    } catch (ex) {
        message = "Exception: " + ex;
    }

    reporter.addCase(expectedScore, ok, message);
};

var runSuiteOnGame = function(reporter, TennisGame, title) {
    reporter.addSuite(title);
    allScores.forEach(function(score) {
        checkScore(reporter, TennisGame, score[0], score[1], score[2]);
    });
};

var getBrowserReporter = function() {
    var results = document.getElementById("results");
    var total = document.getElementById("total");
    var reporter = {
        errors: 0,
        addSuite: function(title) {
            results.innerHTML += "<tr style=\"background:#D0D0D0;\"><td>" + title + " </td><td></td></tr>";
        },
        addCase: function(title, ok, message) {
            var color = ok ? "#20FF20" : "#FF2020";
            results.innerHTML += "<tr><td>" + title + "</td><td style=\"background:" + color + ";\">" + message + "</td></tr>";
            if (!ok) {
                this.errors++;
            }
        },
        done: function() {
            var color = (this.errors === 0) ? "#20FF20" : "#FF2020";
            total.innerHTML = "<div style=\"background:" + color + ";\">" + this.errors + " failure(s)!</div>"
        }
    };

    return reporter;
};

var getConsoleReporter = function() {
    var reporter = {
        errors: 0,
        addSuite: function(title) {
            console.log("Running suite '" + title + "'...");
        },
        addCase: function(title, ok, message) {
            if (!ok) {
                console.log("Case '" + title + "': " + message);
                this.errors++;
            }
        },
        done: function() {
            if (this.errors > 0) {
                console.log("Got " + this.errors + " failure(s)!");
            } else {
                console.log("Done, Tot OK ");
            }
        }
    };

    return reporter;
};

var reporter = null;

if (typeof window !== "undefined") {
    reporter = getBrowserReporter();
} else {
    reporter = getConsoleReporter();
}

runSuiteOnGame(reporter, TennisGame1, "TennisGame1");
runSuiteOnGame(reporter, TennisGame2, "TennisGame2");
runSuiteOnGame(reporter, TennisGame3, "TennisGame3");
reporter.done();