/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Sequence", function () {
    it("gets the current element", function () {
        var onlyElement = 3;
        var sequence = new Sequence([onlyElement]);

        expect(sequence.current()).toBe(onlyElement);
    });

    it("gets the next element", function () {
        var secondElement = 3;
        var sequence = new Sequence([1, secondElement]);

        sequence.next();

        expect(sequence.current()).toBe(secondElement);
    });
    it("knows when there are no more elements", function () {
        var sequence = new Sequence([1, 2]);

        sequence.next();
        sequence.next();
        sequence.next();

        expect(sequence.valid()).toBe(false)
    });

    it("starts iterating again", function () {
        var firstElement = 1;
        var sequence = new Sequence([firstElement, 2]);

        sequence.next();
        sequence.next();
        sequence.rewind();

        expect(sequence.current()).toBe(firstElement);
    });

    it("appends more elements to the sequence", function () {
        var firstNumber = 3;
        var secondNumber = 2;
        var sequence = new Sequence();

        sequence.append(firstNumber);
        sequence.append(secondNumber);

        expect(sequence.current()).toBe(firstNumber);
        sequence.next();
        expect(sequence.current()).toBe(secondNumber);
    });

    it("knows if a partial sequence is correct", function () {
        var fullSequence = [3, 0, 1];
        var partialSequence = [3, 0];
        var sequence = new Sequence(fullSequence);

        expect(sequence.isCorrect(partialSequence)).toBe(true);
    });

    it("knows if a full sequence is correct", function () {
        var fullSequence = [3, 0, 1];
        var sequence = new Sequence(fullSequence);

        expect(sequence.isComplete(fullSequence)).toBe(true);
    });

    it("clears the current sequence", function () {
        var sequence = new Sequence();

        sequence.clear();

        expect(sequence.valid()).toBe(false);
    });

    it("determines its size", function () {
        var sequence = new Sequence([2, 1, 0, 2, 3]);

        expect(sequence.size()).toBe(5);
    });
});
