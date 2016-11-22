/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {

    /**
     * @param {Array} elements Optional set of elements for this sequence
     * @constructor
     */
    function Sequence(elements) {
        var sequence = elements || [];
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
         * @param {Number} number
         */
        this.append = function (number) {
            sequence.push(number);
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
