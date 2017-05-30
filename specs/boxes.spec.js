/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Boxes from '../src/boxes';

describe("Boxes", () => {
    let audio = {
        play: () => {}
    };
    let boxesAudio = [audio, audio, audio, audio];
    let $boxes = {
        eq: () => {},
        animate: function () { return this; }
    };

    it("animates the first box", () => {
        spyOn($boxes, "eq").and.returnValue($boxes);
        spyOn(audio, "play");

        const firstBox = 0;
        const boxes = new Boxes($boxes, boxesAudio);

        boxes.animate(firstBox);

        expect($boxes.eq).toHaveBeenCalledWith(firstBox);
        expect(audio.play).toHaveBeenCalled();
    });

    it("animates the last box", () => {
        spyOn($boxes, "eq").and.returnValue($boxes);
        spyOn(audio, "play");

        const lastBox = 3;
        const boxes = new Boxes($boxes, boxesAudio);

        boxes.animate(lastBox);

        expect($boxes.eq).toHaveBeenCalledWith(lastBox);
        expect(audio.play).toHaveBeenCalled();
    });
});
