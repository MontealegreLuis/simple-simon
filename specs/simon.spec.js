/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Simon from '../src/simon';
import Sequence from '../src/sequence';
import ArrayGenerator from './fakes/array-generator';

describe("Simon", () => {
    /** @var {ArrayGenerator} Fake sequence generator */
    let generator;

    /** @var {Object} Fake spy for the Board */
    let board;

    /** @var {Sequence} */
    let sequence;

    /** @var {Simon} */
    let simon;

    beforeEach(() => {
        board = {
            animateSequence: () => {}
        };
        generator = new ArrayGenerator();
        sequence = new Sequence(generator);
        simon = new Simon(sequence);
    });

    it("verifies if player's sequence is correct after first round", () => {
        const singleElementSequence = [3];
        generator.changeSequence(singleElementSequence);

        simon.start();

        expect(simon.verify(singleElementSequence)).toBe(true);
    });

    it("verifies if player's sequence is correct after several rounds", () => {
        const playerSequence = [3, 2, 1];
        generator.changeSequence(playerSequence);
        simon.start();
        simon.nextRound();
        simon.nextRound();

        expect(simon.verify(playerSequence)).toBe(true);
    });

    it("verifies if player's sequence is correct after all rounds", () => {
        const playerSequence = [3, 2, 1, 0];
        generator.changeSequence(playerSequence);
        simon.start();
        simon.nextRound();
        simon.nextRound();
        simon.nextRound();

        expect(simon.isComplete(playerSequence)).toBe(true);
    });

    it("knows the current round number", () => {
        sequence.append();
        sequence.append();
        sequence.append();
        sequence.append();

        expect(simon.roundNumber()).toBe(4);
    });
});
