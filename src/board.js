/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * @param {Boxes} boxes
     * @constructor
     */
    function Board(boxes) {
        this.gameOver = function() {
        };
        this.animateSequence = function(sequence) {
            boxes.animate(sequence);
        };
        this.animateBox = function(index) {
            boxes.animate([index]);
        };
    }

    window.Board = Board;
})(window);
