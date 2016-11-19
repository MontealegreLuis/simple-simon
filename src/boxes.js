/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    function Boxes($boxes) {
        /**
         * @param {Number} index
         */
        this.animate = function (index) {
            $boxes
                .eq(index)
                .animate({opacity: 1})
                .animate({opacity: .5})
            ;
        };
    }

    window.Boxes = Boxes;
})(window);
