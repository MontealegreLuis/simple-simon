/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    /**
     * @param {jQuery} $boxes
     * @param {Array} boxesAudio
     * @constructor
     */
    function Boxes($boxes, boxesAudio) {
        /**
         * @param {Number} index
         */
        this.animate = function (index) {
            boxesAudio[index].play();
            $boxes
                .eq(index)
                .animate({opacity: 1})
                .animate({opacity: .5})
            ;
        };
    }

    window.Boxes = Boxes;
})(window);
