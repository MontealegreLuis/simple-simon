/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Player", function () {
    var generator, board, simon, player;

    beforeEach(function () {
        board = {
            animate: function (box) {},
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
        expect(player.matches(simonNumber, simon)).toBe(true);

        expect(board.animate).toHaveBeenCalledWith(simonNumber);
    });

    it("verifies a sequence with a single element", function () {
        var simonNumber = 3;

        simon.start();

        expect(player.matches(simonNumber, simon)).toBe(true);
    });
    it("verifies a sequence with several elements", function () {
        var simonNumbers = [3, 2, 1, 0];

        simon.start();
        expect(player.matches(simonNumbers[0], simon)).toBe(true);
        simon.nextRound();
        expect(player.matches(simonNumbers[1], simon)).toBe(true);
        simon.nextRound();
        expect(player.matches(simonNumbers[2], simon)).toBe(true);
        simon.nextRound();
        expect(player.matches(simonNumbers[3], simon)).toBe(true);

        expect(player.isWinner(simon)).toBe(true);
    });
    it("updates the board if player does not win", function () {
        var wrongNumber = 10;
        simon = {
            verify: function () { return false; }
        };

        expect(player.matches(wrongNumber, simon)).toBe(false);
    });
});
