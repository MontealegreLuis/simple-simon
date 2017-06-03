/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
export default class BoardAnimation {
    /** @param {Boxes} boxes */
    constructor(boxes) {
        this.boxes = boxes;
        this._defaultDuration = 1000;
    }

    animate(sequence) {
        sequence.rewind();
        this._animateBoxFrom.intervalId = setInterval(
            () => this._animateBoxFrom(sequence),
            this._defaultDuration
        );
    }

    _animateBoxFrom(sequence) {
        this.boxes.animate(sequence.current());
        sequence.next();
        if (!sequence.valid()) {
            clearInterval(this._animateBoxFrom.intervalId);
        }
    }

    /** @param {Number} sequenceNumber */
    animateBoxNumbered(sequenceNumber) {
        this.boxes.animate(sequenceNumber);
    }
}
