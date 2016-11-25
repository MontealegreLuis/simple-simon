/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Simon", function () {
    /** @var {ArrayGenerator} Fake sequence generator */
    var generator;

    /** @var {Object} Fake spy for the Board */
    var board;

    /** @var {Sequence} */
    var sequence;

    /** @var {Simon} */
    var simon;

    beforeEach(function () {
        board = {
            animateSequence: function () {}
        };
        generator = new ArrayGenerator();
        sequence = new Sequence(generator);
        simon = new Simon(board, sequence);
    });

    it("verifies if player's sequence is correct after first round", function () {
        var singleElementSequence = [3];
        generator.changeSequence(singleElementSequence);

        simon.start();

        expect(simon.verify(singleElementSequence)).toBe(true);
    });

    it("verifies if player's sequence is correct after several rounds", function () {
        var playerSequence = [3, 2, 1];
        generator.changeSequence(playerSequence);
        simon.start();
        simon.nextRound();
        simon.nextRound();

        expect(simon.verify(playerSequence)).toBe(true);
    });

    it("verifies if player's sequence is correct after all rounds", function () {
        var playerSequence = [3, 2, 1, 0];
        generator.changeSequence(playerSequence);
        simon.start();
        simon.nextRound();
        simon.nextRound();
        simon.nextRound();

        expect(simon.isComplete(playerSequence)).toBe(true);
    });

    it("animates the board with the current sequence", function () {
        spyOn(board, "animateSequence");
        simon.start();
        simon.nextRound();
        simon.nextRound();

        simon.animate();

        expect(board.animateSequence).toHaveBeenCalled();
    });

    it("knows the size of the current sequence", function () {
        sequence.append();
        sequence.append();
        sequence.append();
        sequence.append();

        expect(simon.sequenceSize()).toBe(4);
    });
});
