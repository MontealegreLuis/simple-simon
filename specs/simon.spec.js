/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Simon", function () {
    var generator, board;

    beforeEach(function () {
        board = {
            animate: function (sequence) {}
        };
        generator = {
            sequence: [3, 2, 1, 0],
            generate: function() {
                return this.sequence.shift();
            }
        };
    });

    it("can verify if player's sequence is correct after first round", function () {
        var simon = new Simon(null, generator);

        simon.firstRound();

        expect(simon.verify([3])).toBe(true);
    });

    it("can verify if player's sequence is correct after several rounds", function () {
        var simon = new Simon(null, generator);

        simon.firstRound();
        simon.nextRound();
        simon.nextRound();
        simon.nextRound();

        expect(simon.verify([3, 2, 1, 0])).toBe(true);
    });

    it("animates the board with the current sequence", function () {
        var simon = new Simon(board, generator);
        spyOn(board, "animate");
        simon.firstRound();
        simon.nextRound();
        simon.nextRound();

        simon.animate([3, 2, 1]);

        expect(board.animate).toHaveBeenCalledWith([3, 2, 1]);
    })
});
