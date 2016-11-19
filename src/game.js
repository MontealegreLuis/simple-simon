/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * @param {Board} board
     * @param {Simon} simon
     * @param {Player} player
     * @constructor
     */
    function Game(board, simon, player) {
        /**
         * Generates the first random element in the sequence and animates the board
         */
        this.start = function() {
            player.restart();
            board.reset();
            simon.start();
            simon.animate();
        };

        /**
         * If the current box is incorrect, the game is over.
         * If the current sequence is correct the game continues.
         * If the whole sequence is correct Simon generates one more random value.
         *
         * @param {Number} box
         */
        this.play = function (box) {
            if (!player.matches(box, simon)) {
                board.gameOver();
                return;
            }
            if (player.isWinner(simon)) {
                player.restart();
                simon.nextRound();
                simon.animate();
            }
        }
    }

    window.Game = Game;
})(window);
