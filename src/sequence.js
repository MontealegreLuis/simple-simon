/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
export default class Sequence {

    /**
     * @param {RandomGenerator} generator
     * @constructor
     */
    constructor(generator) {
        this.generator = generator;
        this.clear();
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
     * Append an element to this sequence
     */
    append() {
        this._sequence.push(this.generator.generate());
    }

    /**
     * @param {Array} playerSequence
     * @returns {Boolean}
     */
    isCorrect(playerSequence) {
        return playerSequence.toString() == this._sequence.slice(0, playerSequence.length).toString();
    }

    /**
     * @param {Array} playerSequence
     * @returns {Boolean}
     */
    isComplete(playerSequence) {
        return this._sequence.length === playerSequence.length && this.isCorrect(playerSequence);
    }

    clear() {
        this._sequence = [];
        this._index = 0;
    }

    /** @returns {Number} */
    size() {
        return this._sequence.length;
    }
}
