/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Boxes from '../src/boxes';

describe('Boxes', () => {
    /** @var {Object} Spy for the audio played on each box animation */
    let audio;

    /** @var {Array} All the audio files played on each animation */
    let boxesAudio;

    /** @var {jQuery} Spy for the boxes being animated */
    let $boxes;

    beforeEach(() => {
        audio = {play: () => {}};
        boxesAudio = [audio, audio, audio, audio];
        $boxes = {
            eq: () => {},
            animate: function () { return this; }
        };
    });

    it('animates the first box', () => {
        spyOn($boxes, 'eq').and.returnValue($boxes);
        spyOn(audio, 'play');

        const firstBox = 0;
        const boxes = new Boxes($boxes, boxesAudio);

        boxes.animate(firstBox);

        expect($boxes.eq).toHaveBeenCalledWith(firstBox);
        expect(audio.play).toHaveBeenCalled();
    });

    it('animates the last box', () => {
        spyOn($boxes, 'eq').and.returnValue($boxes);
        spyOn(audio, 'play');

        const lastBox = 3;
        const boxes = new Boxes($boxes, boxesAudio);

        boxes.animate(lastBox);

        expect($boxes.eq).toHaveBeenCalledWith(lastBox);
        expect(audio.play).toHaveBeenCalled();
    });
});
