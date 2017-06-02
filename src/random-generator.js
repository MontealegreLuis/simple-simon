/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */

/**
 * Generates random integer values within a given range
 */
export default class RandomGenerator {
    /**
     * @param {number} min
     * @param {number} max
     */
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    /** @return {Number} */
    generate() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
}
