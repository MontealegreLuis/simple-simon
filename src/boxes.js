/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
export default class Boxes {
    /**
     * @param {jQuery} $boxes
     * @param {Array} boxesAudio
     */
    constructor($boxes, boxesAudio) {
        this.$boxes = $boxes;
        this.boxesAudio = boxesAudio;
    }

    /** @param {Number} index */
    animate(index) {
        this.boxesAudio[index].play();
        this.$boxes
            .eq(index)
            .animate({opacity: 1})
            .animate({opacity: .5})
        ;
    }
}
