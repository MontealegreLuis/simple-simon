/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Player", function () {
    var generator, board;

    beforeEach(function () {
        board = {
            gameOver: function (sequence) {}
        };
        generator = {
            sequence: [3, 2, 1, 0],
            generate: function() {
                return this.sequence.shift();
            }
        };
    });

    it("verifies a sequence with a single element", function () {
        var player = new Player(null);
        var simonNumber = 3;
        var simon = new Simon(board, generator);

        simon.start();
        player.play(simonNumber);

        expect(player.matches(simon)).toBe(true);
    });
    it("verifies a sequence with several elements", function () {
        var player = new Player(null);
        var simonNumbers = [3, 2, 1, 0];
        var simon = new Simon(board, generator);

        simon.start();
        player.play(simonNumbers[0]);
        simon.nextRound();
        player.play(simonNumbers[1]);
        simon.nextRound();
        player.play(simonNumbers[2]);
        simon.nextRound();
        player.play(simonNumbers[3]);

        expect(player.matches(simon)).toBe(true);
    });
    it("updates the board if player does not win", function () {
        var player = new Player(board);
        var simon = {
            verify: function (sequence) { return false; }
        };
        spyOn(board, "gameOver");

        expect(player.matches(simon)).toBe(false);
        expect(board.gameOver).toHaveBeenCalled();
    });
});
