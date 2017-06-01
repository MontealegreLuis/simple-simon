/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Sequence from '../src/sequence';
import ArrayGenerator from './fakes/array-generator';

describe('Sequence', () => {
    /** @var {ArrayGenerator} Fake sequence generator */
    let generator;

    /** @var {Sequence} */
    let sequence;

    beforeEach(() => {
        generator = new ArrayGenerator();
        sequence = new Sequence(generator);
    });

    it('gets the current element', () => {
        const onlyElement = 3;
        generator.changeSequence([onlyElement]);
        sequence.append();

        expect(sequence.current()).toBe(onlyElement);
    });

    it('gets the next element', () => {
        const secondElement = 3;
        generator.changeSequence([1, secondElement]);
        sequence.append();
        sequence.append();

        sequence.next();

        expect(sequence.current()).toBe(secondElement);
    });

    it('knows when there are no more elements', () => {
        generator.changeSequence([1, 2]);
        sequence.append();
        sequence.append();

        sequence.next();
        sequence.next();
        sequence.next();

        expect(sequence.valid()).toBe(false)
    });

    it('starts iterating again', () => {
        const firstElement = 1;
        generator.changeSequence([firstElement, 2]);
        sequence.append();
        sequence.append();

        sequence.next();
        sequence.next();
        sequence.rewind();

        expect(sequence.current()).toBe(firstElement);
    });

    it('appends more elements to the sequence', () => {
        const firstNumber = 3;
        const secondNumber = 2;
        generator.changeSequence([firstNumber, secondNumber]);

        sequence.append();
        sequence.append();

        expect(sequence.current()).toBe(firstNumber);
        sequence.next();
        expect(sequence.current()).toBe(secondNumber);
    });

    it('knows if a partial sequence is correct', () => {
        const fullSequence = [3, 0, 1];
        const partialSequence = [3, 0];
        generator.changeSequence(fullSequence);
        sequence.append();
        sequence.append();
        sequence.append();

        expect(sequence.isCorrect(partialSequence)).toBe(true);
    });

    it('knows if a full sequence is correct', () => {
        const fullSequence = [3, 0, 1];
        generator.changeSequence(fullSequence);
        sequence.append();
        sequence.append();
        sequence.append();

        expect(sequence.isComplete(fullSequence)).toBe(true);
    });

    it('clears the current sequence', () => {
        sequence.clear();

        expect(sequence.valid()).toBe(false);
    });

    it('determines its size', () => {
        const fiveElementsSequence = [2, 1, 0, 2, 3];
        generator.changeSequence(fiveElementsSequence);
        sequence.append();
        sequence.append();
        sequence.append();
        sequence.append();
        sequence.append();

        expect(sequence.size()).toBe(fiveElementsSequence.length);
    });
});
