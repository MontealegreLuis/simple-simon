/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    function Boxes($boxes, customAnimation) {
        var index = 0;
        var defaultDuration = 1000;
        var sequence;
        var self = this;
        var moreBoxes = function () {
            return index < sequence.length;
        };
        var animateBox = customAnimation || function() {
            self.animateBox(sequence[index]);
            index++;
            if (!moreBoxes()) {
                clearInterval(animateBox.intervalId)
            }
        };

        /**
         * @param {Number} box
         */
        this.animateBox = function (box) {
            $boxes
                .eq(box)
                .animate({opacity: 1})
                .animate({opacity: .5})
            ;
        };

        /**
         * @param {Array} gameSequence
         */
        this.animateSequence = function (gameSequence) {
            sequence = gameSequence;
            index = 0;
            animateBox.intervalId = setInterval(animateBox, defaultDuration);
        };
    }

    window.Boxes = Boxes;
})(window);
