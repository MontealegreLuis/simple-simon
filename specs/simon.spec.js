/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Simon", function () {
    var generator;
    var board;
    var sequence;

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
        sequence = new Sequence(generator);
    });

    it("verifies if player's sequence is correct after first round", function () {
        var simon = new Simon(null, sequence);

        simon.start();

        expect(simon.verify([3])).toBe(true);
    });

    it("verifies if player's sequence is correct after several rounds", function () {
        var simon = new Simon(null, sequence);

        simon.start();
        simon.nextRound();
        simon.nextRound();

        expect(simon.verify([3, 2, 1])).toBe(true);
    });

    it("verifies if player's sequence is correct after all rounds", function () {
        var simon = new Simon(null, sequence);

        simon.start();
        simon.nextRound();
        simon.nextRound();
        simon.nextRound();

        expect(simon.isComplete([3, 2, 1, 0])).toBe(true);
    });

    it("animates the board with the current sequence", function () {
        var simon = new Simon(board, sequence, generator);
        spyOn(board, "animateSequence");
        simon.start();
        simon.nextRound();
        simon.nextRound();

        simon.animate();

        expect(board.animateSequence).toHaveBeenCalledWith(sequence);
    });

    it("knows the size of the current sequence", function () {
        var simon = new Simon(null, sequence);
        sequence.append();
        sequence.append();
        sequence.append();
        sequence.append();

        expect(simon.sequenceSize()).toBe(4);
    });
});
