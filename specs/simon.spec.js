/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Simon", function () {
    var generator, board;

    beforeEach(function () {
        board = {
            animateSequence: function (sequence) {}
        };
        generator = {
            sequence: [3, 2, 1, 0],
            generate: function() {
                return this.sequence.shift();
            }
        };
    });

    it("verifies if player's sequence is correct after first round", function () {
        var simon = new Simon(null, generator);

        simon.start();

        expect(simon.verify([3])).toBe(true);
    });

    it("verifies if player's sequence is correct after several rounds", function () {
        var simon = new Simon(null, generator);

        simon.start();
        simon.nextRound();
        simon.nextRound();

        expect(simon.verify([3, 2, 1])).toBe(true);
    });

    it("verifies if player's sequence is correct after all rounds", function () {
        var simon = new Simon(null, generator);

        simon.start();
        simon.nextRound();
        simon.nextRound();
        simon.nextRound();

        expect(simon.isComplete([3, 2, 1, 0])).toBe(true);
    });

    it("animates the board with the current sequence", function () {
        var simon = new Simon(board, generator);
        spyOn(board, "animateSequence");
        simon.start();
        simon.nextRound();
        simon.nextRound();

        simon.animate([3, 2, 1]);

        expect(board.animateSequence).toHaveBeenCalledWith([3, 2, 1]);
    })
});
