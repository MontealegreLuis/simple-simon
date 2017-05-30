/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
export default class BoardAnimation {
    /**
     * @param {Sequence} sequence
     * @param {Boxes} boxes
     */
    constructor(sequence, boxes) {
        this.sequence = sequence;
        this.boxes = boxes;
        this._defaultDuration = 1000;
    }

    animate() {
        this.sequence.rewind();
        this._animateBox.intervalId = setInterval(() => this._animateBox(), this._defaultDuration);
    }

    _animateBox() {
        this.boxes.animate(this.sequence.current());
        this.sequence.next();
        if (!this.sequence.valid()) {
            clearInterval(this._animateBox.intervalId);
        }
    }

    /** @param {Number} sequenceNumber */
    animateBoxNumbered(sequenceNumber) {
        this.boxes.animate(sequenceNumber);
    }
}
