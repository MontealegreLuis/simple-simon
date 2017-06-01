/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */

/**
 * Represents an iterable sequence of random numbers
 */
export default class Sequence {

    /** @param {RandomGenerator} generator */
    constructor(generator) {
        this.generator = generator;
        this.empty();
    }

    /** @returns {Number} */
    current() {
        return this._sequence[this._index];
    }

    next() {
        ++this._index;
    }

    rewind() {
        this._index = 0;
    }

    /** @returns {Boolean} */
    valid() {
        return this._sequence[this._index] !== undefined;
    }

    /**
     * Append one more random element to this sequence
     */
    append() {
        this._sequence.push(this.generator.generate());
    }

    /**
     * @param {Array} playerSequence
     * @returns {Boolean}
     */
    isCorrect(playerSequence) {
        return playerSequence.every((number, i) => number === this._sequence[i]);
    }

    /**
     * @param {Array} playerSequence
     * @returns {Boolean}
     */
    isComplete(playerSequence) {
        return this._sequence.length === playerSequence.length && this.isCorrect(playerSequence);
    }

    empty() {
        this._sequence = [];
        this._index = 0;
    }

    /** @returns {Number} */
    size() {
        return this._sequence.length;
    }
}
