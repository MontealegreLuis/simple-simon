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
        simon = new Simon(sequence);
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

    it("knows the current round number", function () {
        sequence.append();
        sequence.append();
        sequence.append();
        sequence.append();

        expect(simon.roundNumber()).toBe(4);
    });
});
