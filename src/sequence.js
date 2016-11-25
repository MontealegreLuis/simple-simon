/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {

    /**
     * @param {RandomGenerator} generator
     * @constructor
     */
    function Sequence(generator) {
        var sequence = [];
        var index = 0;

        /**
         * @returns {Number}
         */
        this.current = function () {
            return sequence[index];
        };

        this.next = function () {
            ++index;
        };

        this.rewind = function () {
            index = 0;
        };

        /**
         * @returns {Boolean}
         */
        this.valid = function () {
            return sequence[index] !== undefined;
        };

        /**
         * Append an element to this sequence
         */
        this.append = function () {
            sequence.push(generator.generate());
        };

        /**
         * @param {Array} playerSequence
         * @returns {Boolean}
         */
        this.isCorrect = function (playerSequence) {
            return playerSequence.toString() == sequence.slice(0, playerSequence.length).toString();
        };

        /**
         * @param {Array} playerSequence
         * @returns {Boolean}
         */
        this.isComplete = function (playerSequence) {
            return sequence.length === playerSequence.length && this.isCorrect(playerSequence);
        };

        this.clear = function() {
            sequence = [];
            index = 0;
        };

        /**
         * @returns {Number}
         */
        this.size = function () {
            return sequence.length;
        }
    }

    window.Sequence = Sequence;
})(window);
