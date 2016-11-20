/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Player", function () {
    var generator, board, simon, player;

    beforeEach(function () {
        board = {
            animateBox: function (box) {}
        };
        generator = {
            sequence: [3, 2, 1, 0],
            generate: function() {
                return this.sequence.shift();
            }
        };
        player = new Player(board);
        simon = new Simon(board, new Sequence(), generator);
    });

    it("animates the current box", function () {
        var simonNumber = 3;
        spyOn(board, "animateBox");

        simon.start();
        expect(player.matches(simonNumber, simon)).toBe(true);

        expect(board.animateBox).toHaveBeenCalledWith(simonNumber);
    });

    it("verifies a sequence with a single element", function () {
        var simonNumber = 3;

        simon.start();

        expect(player.matches(simonNumber, simon)).toBe(true);
    });
    it("verifies a full sequence with several elements", function () {
        var simonNumbers = [3, 2, 1, 0];

        simon.start();
        player.matches(simonNumbers[0], simon);
        simon.nextRound();
        player.matches(simonNumbers[1], simon);
        simon.nextRound();
        player.matches(simonNumbers[2], simon);
        simon.nextRound();
        player.matches(simonNumbers[3], simon);

        expect(player.isWinner(simon)).toBe(true);
    });
    it("updates the board if player does not win", function () {
        var wrongNumber = 10;
        simon = {
            verify: function () { return false; }
        };

        expect(player.matches(wrongNumber, simon)).toBe(false);
    });
    it("resets its sequence", function () {
        var simon = new Simon(null, new Sequence(), null);

        player.restart();

        // Comparing 2 empty sequence shouldbe true
        expect(player.isWinner(simon)).toBe(true);
    })
});
