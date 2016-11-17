/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    function Boxes($boxes, customAnimation) {
        var index = 0;
        var defaultDuration = 1000;
        var sequence;
        var hasNext = function () {
            return index < sequence.length;
        };
        var animateBox = customAnimation || function() {
            animateSingleBox(sequence[index]);
            index++;
            if (!hasNext()) {
                clearInterval(animateBox.intervalId)
            }
        };

        /**
         * @param {Number} box
         */
        var animateSingleBox = function (box) {
            $boxes
                .eq(box)
                .animate({opacity: 1})
                .animate({opacity: .5})
            ;
        };

        /**
         * @param {Array} gameSequence
         */
        this.animate = function (gameSequence) {
            if (gameSequence.length === 1) {
                animateSingleBox(gameSequence[0]);
                return;
            }
            sequence = gameSequence;
            index = 0;
            animateBox.intervalId = setInterval(animateBox, defaultDuration);
        };
    }

    window.Boxes = Boxes;
})(window);
