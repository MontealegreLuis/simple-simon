/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * @param {BoardAnimation} animation
     * @param {Display} display
     * @param {Audio} gameOverSound
     * @constructor
     */
    function Board(animation, display, gameOverSound) {
        this.gameOver = function () {
            gameOverSound.play();
            display.gameOverMessage("Game over...");
        };

        this.reset = function () {
            display.welcomeMessage("Simple Simon");
        };

        /**
         * @param {Number} currentScore
         */
        this.updateScore = function (currentScore) {
            display.updateScore(currentScore);
        };

        this.animateSequence = function () {
            animation.animate();
        };

        /**
         * @param {Number} index
         */
        this.highlightBox = function (index) {
            animation.animateBoxNumbered(index);
        };
    }

    window.Board = Board;
})(window);
