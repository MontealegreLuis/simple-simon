/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
export default class Player {
    /**
     * A player is able to add boxes to her sequence and verify if the choice was correct
     */
    constructor() {
        this.restart();
    }

    /** @param {Number} box*/
    play(box) {
        this.sequence.push(box);
    }

    /**
     * Add the box to the sequence and verify if the current sequence is correct
     *
     * @param {Simon} simon
     * @returns boolean
     */
    winsTurn(simon) {
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
