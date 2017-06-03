/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */

/**
 * Animates either all or a specific box in the board
 */
export default class BoardAnimation {
    /** @param {Boxes} boxes */
    constructor(boxes) {
        this.boxes = boxes;
        this._defaultDuration = 1000;
        this._animationIntervalId = -1;
    }

    /** @param {Sequence} sequence */
    animate(sequence) {
        sequence.rewind();
        this._animationIntervalId = setInterval(
            () => this._animateBoxFrom(sequence),
            this._defaultDuration
        );
    }

    /**
     * Animates a single box based on the current element of the sequence
     *
     * @param {Sequence} sequence
     */
    _animateBoxFrom(sequence) {
        this.boxes.animate(sequence.current());
        sequence.next();
        if (!sequence.valid()) {
            clearInterval(this._animationIntervalId);
        }
    }

    /** @param {Number} position */
    animateBoxAt(position) {
        this.boxes.animate(position);
    }
}
