/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * @param {Boxes} boxes
     * @param {SequenceAnimation} animation
     * @param {jQuery} panel
     * @constructor
     */
    function Board(boxes, animation, panel) {
        this.gameOver = function() {
            panel
                .removeClass("panel-default")
                .addClass("panel-danger")
            ;
            panel
                .children(".panel-heading")
                .html("<strong>Game over...</strong>")
            ;
        };
        this.reset = function () {
            panel
                .removeClass("panel-danger")
                .addClass("panel-default")
            ;
            panel
                .children(".panel-heading")
                .html("<strong>Simple Simon</strong>")
            ;
        }
        this.animateSequence = function() {
            animation.animate();
        };
        this.animateBox = function(index) {
            boxes.animate(index);
        };
    }

    window.Board = Board;
})(window);
