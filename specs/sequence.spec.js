/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Sequence", function () {
    var generator;
    var sequence;

    beforeEach(function () {
        generator = {
            sequence: null,
            generate: function () {
                return this.sequence.shift();
            }
        };
        sequence = new Sequence(generator);
    });

    it("gets the current element", function () {
        var onlyElement = 3;
        generator.sequence = [onlyElement];
        sequence.append();

        expect(sequence.current()).toBe(onlyElement);
    });

    it("gets the next element", function () {
        var secondElement = 3;
        generator.sequence = [1, secondElement];
        sequence.append();
        sequence.append();

        sequence.next();

        expect(sequence.current()).toBe(secondElement);
    });

    it("knows when there are no more elements", function () {
        generator.sequence = [1, 2];
        sequence.append();
        sequence.append();

        sequence.next();
        sequence.next();
        sequence.next();

        expect(sequence.valid()).toBe(false)
    });

    it("starts iterating again", function () {
        var firstElement = 1;
        generator.sequence = [firstElement, 2];
        sequence.append();
        sequence.append();

        sequence.next();
        sequence.next();
        sequence.rewind();

        expect(sequence.current()).toBe(firstElement);
    });

    it("appends more elements to the sequence", function () {
        var firstNumber = 3;
        var secondNumber = 2;
        generator.sequence = [firstNumber, secondNumber];

        sequence.append();
        sequence.append();

        expect(sequence.current()).toBe(firstNumber);
        sequence.next();
        expect(sequence.current()).toBe(secondNumber);
    });

    it("knows if a partial sequence is correct", function () {
        var fullSequence = [3, 0, 1];
        var partialSequence = [3, 0];
        generator.sequence = fullSequence;
        sequence.append();
        sequence.append();
        sequence.append();

        expect(sequence.isCorrect(partialSequence)).toBe(true);
    });

    it("knows if a full sequence is correct", function () {
        var fullSequence = [3, 0, 1];
        generator.sequence = [3, 0, 1];
        sequence.append();
        sequence.append();
        sequence.append();

        expect(sequence.isComplete(fullSequence)).toBe(true);
    });

    it("clears the current sequence", function () {
        sequence.clear();

        expect(sequence.valid()).toBe(false);
    });

    it("determines its size", function () {
        generator.sequence = [2, 1, 0, 2, 3];
        sequence.append();
        sequence.append();
        sequence.append();
        sequence.append();
        sequence.append();

        expect(sequence.size()).toBe(5);
    });
});
