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
            board.reset();
            player.restart();
            simon.start();
            board.animateSequence();
        };

        /**
         * If the current box is incorrect, the game is over.
         * If the current sequence is correct the game continues.
         * If the whole sequence is correct Simon generates one more random value.
         *
         * @param {Number} box
         */
        this.play = function (box) {
            if (!player.winsTurn(box, simon)) {
                board.gameOver();
                return;
            }

            if (player.winsRound(simon)) {
                board.updateScore(simon.roundNumber());
                simon.nextRound();
                board.animateSequence();
                player.restart();
            }
        }
    }

    window.Game = Game;
})(window);
