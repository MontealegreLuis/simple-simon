/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * @param {BoardAnimation} animation
     * @param {jQuery} panel
     * @param {Audio} gameOverSound
     * @constructor
     */
    function Board(animation, panel, gameOverSound) {
        this.gameOver = function () {
            gameOverSound.play();
            panel
                .removeClass("panel-default")
                .addClass("panel-danger")
            ;
            panel
                .children("[data-board-title]")
                .html("<strong>Game over...</strong>")
            ;
        };

        this.reset = function () {
            panel
                .removeClass("panel-danger")
                .addClass("panel-default")
            ;
            panel
                .children("[data-board-title]")
                .html("<strong>Simple Simon</strong>")
            ;
        };

        /**
         * @param {Number} currentScore
         */
        this.updateScore = function (currentScore) {
            panel
                .children(".panel-heading")
                .html("<strong>Score " + currentScore + "</strong>")
            ;
        };

        this.animateSequence = function () {
            animation.animate();
        };

        /**
         * @param {Number} index
         */
        this.highlightBox = function (index) {
            animation.animateBox(index);
        };
    }

    window.Board = Board;
})(window);
