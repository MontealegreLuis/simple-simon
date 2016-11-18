/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * @param {Boxes} boxes
     * @param {SequenceAnimation} animation
     * @constructor
     */
    function Board(boxes, animation) {
        this.gameOver = function() {
        };
        this.animateSequence = function() {
            animation.animate();
        };
        this.animateBox = function(index) {
            boxes.animateBox(index);
        };
    }

    window.Board = Board;
})(window);
