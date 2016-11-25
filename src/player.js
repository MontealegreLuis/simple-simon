/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * A player is able to add boxes to her sequence and verify if the choice was
     * correct
     *
     * @param {Board} board
     * @constructor
     */
    function Player(board) {
        /**
         * @type {Array} Contains the player's sequence
         */
        var sequence;

        /**
         * Animate the box and add it to the player's sequence
         *
         * @param {Number} box
         */
        var play = function (box) {
            sequence = sequence || [];
            sequence.push(box);
            board.highlightBox(box);
        };

        /**
         * Add the box to the sequence and verify if the current sequence is correct
         *
         * @param {Number} box
         * @param {Simon} simon
         * @returns boolean
         */
        this.matches = function (box, simon) {
            play(box);
            return simon.verify(sequence);
        };

        /**
         * Verifies if the whole sequence is correct
         *
         * @param {Simon} simon
         * @returns {Boolean}
         */
        this.isWinner = function (simon) {
            return simon.isComplete(sequence);
        };

        /**
         * The player sequence needs to be cleaned up every time it guesses the
         * current Simon's sequence
         */
        this.restart = function() {
            sequence = [];
        }
    }

    window.Player = Player;
})(window);
