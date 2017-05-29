/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
class ArrayGenerator {
    /** @param {Array} predefinedSequence */
    constructor(predefinedSequence = []) {
        this.current = 0;
        this.sequence = predefinedSequence;
    }

    /** @return {Number} */
    generate() {
        const currentElement = this.sequence[this.current];
        this.current++;

        return currentElement;
    }

    /** @param {Array} newSequence */
    changeSequence(newSequence) {
        this.sequence = newSequence;
    }
}
