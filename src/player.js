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
        this.play = function (box) {
            sequence = sequence || [];
            sequence.push(box);
            board.animate(box);
        };

        /**
         * @param simon
         * @returns boolean
         */
        this.matches = function (simon) {
            var won = simon.verify(sequence);
            if (!won) {
                board.gameOver();
            }
            return won;
        };
    }

    window.Player = Player;
})(window);
