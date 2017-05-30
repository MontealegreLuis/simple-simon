/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
export default class Simon {
    /**
     * Generates a sequence of random numbers that a player has to memorize.
     *
     * @param {Sequence} sequence This game's sequence
     */
    constructor(sequence) {
        this.sequence = sequence;
    }

    /**
     * Populate the sequence with the first random value
     */
    start() {
        this.sequence.clear();
        this.nextRound();
    }

    /**
     * Adds a value to the sequence
     */
    nextRound() {
        this.sequence.append();
    }

    /** @returns {Number} */
    roundNumber() {
        return this.sequence.size();
    }

    /**
     * Verifies that the current player's is correct
     *
     * @param {Array} playerSequence
     * @return {Boolean}
     */
    verify(playerSequence) {
        return this.sequence.isCorrect(playerSequence);
    }

    /**
     * Returns true only if the whole sequence is correct
     *
     * @param {Array} playerSequence
     * @returns {Boolean}
     */
    isComplete(playerSequence) {
        return this.sequence.isComplete(playerSequence);
    }
}
