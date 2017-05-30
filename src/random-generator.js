/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
export default class RandomGenerator {
    /**
     * Generates random integer values between `min` and `max`
     *
     * @param {number} min Minimum value
     * @param {number} max Maximum value
     */
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }

    generate() {
        return Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
    }
}
