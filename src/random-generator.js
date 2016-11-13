/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    /**
     * Generates random integer values between `min` and `max`
     *
     * @param {number} min Minimum value
     * @param {number} max Maximum value
     * @constructor
     */
    function RandomGenerator(min, max) {
        this.generate = function() {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };
    }

    window.RandomGenerator = RandomGenerator;
})(window);
