/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * @param {Sequence} sequence
     * @param {Boxes} boxes
     * @constructor
     */
    function BoardAnimation(sequence, boxes) {
        var defaultDuration = 1000;

        var animateBox = function () {
            boxes.animate(sequence.current());
            sequence.next();
            if (!sequence.valid()) {
                clearInterval(animateBox.intervalId)
            }
        };

        this.animate = function () {
            sequence.rewind();
            animateBox.intervalId = setInterval(animateBox, defaultDuration);
        };

        /**
         * @param {Number} sequenceNumber
         */
        this.animateBoxNumbered = function (sequenceNumber) {
            boxes.animate(sequenceNumber);
        }
    }

    window.BoardAnimation = BoardAnimation;
})(window);
