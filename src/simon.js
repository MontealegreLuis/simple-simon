/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * Generates a sequence of random numbers that a player has to memorize.
     *
     * @param {Board} board The game's board
     * @param {RandomGenerator} generator The random number generator
     * @constructor
     */
    function Simon(board, generator) {
        /**
         * @type {Array} Contains the random sequence
         */
        var sequence;

        /**
         * Populate the sequence with the first random value
         */
        this.start = function() {
            sequence = [];
            this.nextRound();
        };

        /**
         * Adds a value to the sequence
         */
        this.nextRound = function () {
            sequence.push(generator.generate());
        };

        /**
         * Use the sequence to animate the corresponding boxes in the board
         */
        this.animate = function () {
            board.animate(sequence);
        };

        /**
         * Verifies that the current player's is correct
         *
         * @param {Array} playerSequence
         * @return {Boolean}
         */
        this.verify = function (playerSequence) {
            return sequence.toString() == playerSequence.slice(0, sequence.length).toString();
        };
    }

    window.Simon = Simon;
})(window);
