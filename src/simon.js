/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * Generates a sequence of random numbers that a player has to memorize.
     *
     * @param {Board} board This game's board
     * @param {Sequence} sequence This game's sequence
     * @param {RandomGenerator} generator The random number generator
     * @constructor
     */
    function Simon(board, sequence, generator) {
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
            sequence.append(generator.generate());
        };

        /**
         * Use the sequence to animate the corresponding boxes in the board
         */
        this.animate = function () {
            board.animateSequence(sequence);
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
