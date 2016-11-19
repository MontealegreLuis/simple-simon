/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Boxes", function () {
    var audio = {
        play: function () {}
    };
    var boxesAudio = [audio, audio, audio, audio];
    var $boxes = {
        eq: function () {},
        animate: function(){ return this; }
    };
    it("animates the first box", function () {
        spyOn($boxes, "eq").and.returnValue($boxes);
        spyOn(audio, "play");

        var firstBox = 0;
        var boxes = new Boxes($boxes, boxesAudio);

        boxes.animate(firstBox);

        expect($boxes.eq).toHaveBeenCalledWith(firstBox);
        expect(audio.play).toHaveBeenCalled();
    });

    it("animates the last box", function () {
        spyOn($boxes, "eq").and.returnValue($boxes);
        spyOn(audio, "play");

        var lastBox = 3;
        var boxes = new Boxes($boxes, boxesAudio);

        boxes.animate(lastBox);

        expect($boxes.eq).toHaveBeenCalledWith(lastBox);
        expect(audio.play).toHaveBeenCalled();
    });
});
