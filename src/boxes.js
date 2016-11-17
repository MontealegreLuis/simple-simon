/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    function Boxes($boxes) {
        var sequence;
        var index = 0;
        var hasNext = function () {
            return index < sequence.length;
        };
        var self = this;
        this.animate = function (gameSequence) {
            index = gameSequence !== undefined ? 0 : index;
            sequence = gameSequence || sequence;
            $boxes
                .eq(sequence[index])
                .animate({opacity: 1})
                .animate({opacity: .5}, {duration: 1000, complete: this.animateNext})
            ;
        };
        this.animateNext = function() {
            index++;
            if (hasNext()) {
                self.animate();
            }
        }
    }

    window.Boxes = Boxes;
})(window);