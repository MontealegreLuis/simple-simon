/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    function ArrayGenerator(predefinedSequence) {
        var current = 0;
        var sequence = predefinedSequence || [];

        this.generate = function() {
            var currentElement = sequence[current];
            current++;

            return currentElement;
        };

        this.changeSequence = function (newSequence) {
            sequence = newSequence;
        };
    }

    window.ArrayGenerator = ArrayGenerator;
})(window);
