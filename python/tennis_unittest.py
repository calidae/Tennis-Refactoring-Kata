# -*- coding: utf-8 -*-

import unittest

from tennis import TennisGame1, TennisGame2, TennisGame3

test_cases = [
    (0, 0, "Res-Tot", 'jugador1', 'jugador2'),
    (1, 1, "Quinze-Tot", 'jugador1', 'jugador2'),
    (2, 2, "Trenta-Tot", 'jugador1', 'jugador2'),
    (3, 3, "Iguals", 'jugador1', 'jugador2'),
    (4, 4, "Iguals", 'jugador1', 'jugador2'),

    (1, 0, "Quinze-Res", 'jugador1', 'jugador2'),
    (0, 1, "Res-Quinze", 'jugador1', 'jugador2'),
    (2, 0, "Trenta-Res", 'jugador1', 'jugador2'),
    (0, 2, "Res-Trenta", 'jugador1', 'jugador2'),
    (3, 0, "Quaranta-Res", 'jugador1', 'jugador2'),
    (0, 3, "Res-Quaranta", 'jugador1', 'jugador2'),
    (4, 0, "Victoria de jugador1", 'jugador1', 'jugador2'),
    (0, 4, "Victoria de jugador2", 'jugador1', 'jugador2'),

    (2, 1, "Trenta-Quinze", 'jugador1', 'jugador2'),
    (1, 2, "Quinze-Trenta", 'jugador1', 'jugador2'),
    (3, 1, "Quaranta-Quinze", 'jugador1', 'jugador2'),
    (1, 3, "Quinze-Quaranta", 'jugador1', 'jugador2'),
    (4, 1, "Victoria de jugador1", 'jugador1', 'jugador2'),
    (1, 4, "Victoria de jugador2", 'jugador1', 'jugador2'),

    (3, 2, "Quaranta-Trenta", 'jugador1', 'jugador2'),
    (2, 3, "Trenta-Quaranta", 'jugador1', 'jugador2'),
    (4, 2, "Victoria de jugador1", 'jugador1', 'jugador2'),
    (2, 4, "Victoria de jugador2", 'jugador1', 'jugador2'),

    (4, 3, "Avantatge jugador1", 'jugador1', 'jugador2'),
    (3, 4, "Avantatge jugador2", 'jugador1', 'jugador2'),
    (5, 4, "Avantatge jugador1", 'jugador1', 'jugador2'),
    (4, 5, "Avantatge jugador2", 'jugador1', 'jugador2'),
    (15, 14, "Avantatge jugador1", 'jugador1', 'jugador2'),
    (14, 15, "Avantatge jugador2", 'jugador1', 'jugador2'),

    (6, 4, 'Victoria de jugador1', 'jugador1', 'jugador2'),
    (4, 6, 'Victoria de jugador2', 'jugador1', 'jugador2'),
    (16, 14, 'Victoria de jugador1', 'jugador1', 'jugador2'),
    (14, 16, 'Victoria de jugador2', 'jugador1', 'jugador2'),

    (6, 4, 'Victoria de Federer', 'Federer', 'jugador2'),
    (4, 6, 'Victoria de Djokovic', 'jugador1', 'Djokovic'),
    (6, 5, 'Avantatge Federer', 'Federer', 'jugador2'),
    (5, 6, 'Avantatge Djokovic', 'jugador1', 'Djokovic'),
    
    ]

def play_game(TennisGame, p1Points, p2Points, p1Name, p2Name):
    game = TennisGame(p1Name, p2Name)
    for i in range(max(p1Points, p2Points)):
        if i < p1Points:
            game.won_point(p1Name)
        if i < p2Points:
            game.won_point(p2Name)
    return game

class TestTennis(unittest.TestCase):
     
    def test_Score_Game1(self):
        for testcase in test_cases:
            (p1Points, p2Points, score, p1Name, p2Name) = testcase
            game = play_game(TennisGame1, p1Points, p2Points, p1Name, p2Name)
            self.assertEqual(score, game.score())

    def test_Score_Game2(self):
        for testcase in test_cases:
            (p1Points, p2Points, score, p1Name, p2Name) = testcase
            game = play_game(TennisGame2, p1Points, p2Points, p1Name, p2Name)
            self.assertEqual(score, game.score())

    def test_Score_Game3(self):
        for testcase in test_cases:
            (p1Points, p2Points, score, p1Name, p2Name) = testcase
            game = play_game(TennisGame3, p1Points, p2Points, p1Name, p2Name)
            self.assertEqual(score, game.score())
 
if __name__ == "__main__":
    unittest.main() 
        