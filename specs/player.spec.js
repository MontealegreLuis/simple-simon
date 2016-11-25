/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Player", function () {
    /** @var {ArrayGenerator} Fake generator */
    var generator;

    /** @var {Object} Fake spy of Board */
    var board;

    /** @var {Simon} */
    var simon;

    /** @var {Player} */
    var player;

    beforeEach(function () {
        board = {
            highlightBox: function (box) {}
        };
        generator = new ArrayGenerator([3, 2, 1, 0]);
        player = new Player(board);
        simon = new Simon(new Sequence(generator));
    });

    it("animates the current box", function () {
        var simonNumber = 3;
        spyOn(board, "highlightBox");

        simon.start();

        expect(player.winsTurn(simonNumber, simon)).toBe(true);
        expect(board.highlightBox).toHaveBeenCalledWith(simonNumber);
    });

    it("verifies a sequence with a single element", function () {
        var simonNumber = 3;

        simon.start();

        expect(player.winsTurn(simonNumber, simon)).toBe(true);
    });

    it("verifies a full sequence with several elements", function () {
        var simonNumbers = [3, 2, 1, 0];

        simon.start();
        player.winsTurn(simonNumbers[0], simon);
        simon.nextRound();
        player.winsTurn(simonNumbers[1], simon);
        simon.nextRound();
        player.winsTurn(simonNumbers[2], simon);
        simon.nextRound();
        player.winsTurn(simonNumbers[3], simon);

        expect(player.winsRound(simon)).toBe(true);
    });

    it("updates the board if player does not win", function () {
        var wrongNumber = 10;
        simon = {
            verify: function () { return false; }
        };

        expect(player.winsTurn(wrongNumber, simon)).toBe(false);
    });

    it("resets its sequence", function () {
        player.restart();

        // Comparing 2 empty sequences should be true
        expect(player.winsRound(simon)).toBe(true);
    })
});
