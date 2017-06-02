/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */

/**
 * A player is able to add boxes to her sequence and verify if the choice was correct
 */
export default class Player {

    /** Start with an empty sequence */
    constructor() {
        this.restart();
    }

    /** @param {Number} box*/
    select(box) {
        this.sequence.push(box);
    }

    /**
     * Verify if the current sequence is correct
     *
     * @param {Simon} simon
     * @returns boolean
     */
    isCorrect(simon) {
        return simon.verify(this.sequence);
    }

    /**
     * Verifies if the whole sequence is correct
     *
     * @param {Simon} simon
     * @returns {Boolean}
     */
    winsRound(simon) {
        return simon.isComplete(this.sequence);
    }

    /**
     * The player sequence needs to be cleaned up every time it guesses the
     * current Simon's sequence
     */
    restart() {
        this.sequence = [];
    }
}
