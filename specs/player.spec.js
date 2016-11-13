/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Player", function () {
    var generator, board, simon, player;

    beforeEach(function () {
        board = {
            animate: function (box) {},
            gameOver: function (sequence) {}
        };
        generator = {
            sequence: [3, 2, 1, 0],
            generate: function() {
                return this.sequence.shift();
            }
        };
        player = new Player(board);
        simon = new Simon(board, generator);
    });

    it("animates the current box", function () {
        var simonNumber = 3;
        spyOn(board, "animate");

        simon.start();
        player.play(simonNumber);

        expect(board.animate).toHaveBeenCalledWith(simonNumber);
    });

    it("verifies a sequence with a single element", function () {
        var simonNumber = 3;

        simon.start();
        player.play(simonNumber);

        expect(player.matches(simon)).toBe(true);
    });
    it("verifies a sequence with several elements", function () {
        var simonNumbers = [3, 2, 1, 0];

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
        simon = {
            verify: function (sequence) { return false; }
        };
        spyOn(board, "gameOver");

        expect(player.matches(simon)).toBe(false);
        expect(board.gameOver).toHaveBeenCalled();
    });
});
