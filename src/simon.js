/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * Generates a sequence of random numbers that a player has to memorize.
     *
     * @param {Sequence} sequence This game's sequence
     * @constructor
     */
    function Simon(sequence) {
        /**
         * Populate the sequence with the first random value
         */
        this.start = function() {
            sequence.clear();
            this.nextRound();
        };

        /**
         * Adds a value to the sequence
         */
        this.nextRound = function () {
            sequence.append();
        };

        /**
         * @returns {Number}
         */
        this.sequenceSize = function () {
            return sequence.size();
        };

        /**
         * Verifies that the current player's is correct
         *
         * @param {Array} playerSequence
         * @return {Boolean}
         */
        this.verify = function (playerSequence) {
            return sequence.isCorrect(playerSequence);
        };

        /**
         * Returns true only if the whole sequence is correct
         *
         * @param {Array} playerSequence
         * @returns {Boolean}
         */
        this.isComplete= function(playerSequence) {
            return sequence.isComplete(playerSequence);
        };
    }

    window.Simon = Simon;
})(window);
