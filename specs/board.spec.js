/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Board", function () {
    it("animates a full sequence", function () {
        var animation = {
            animate: function () {}
        };
        spyOn(animation, "animate");
        var board = new Board(null, animation);

        board.animateSequence();

        expect(animation.animate).toHaveBeenCalled();
    });

    it("animates a single box", function () {
        var boxes = {
            animate: function (sequence) {}
        };
        spyOn(boxes, "animate");
        var board = new Board(boxes, null);
        var box = 3;

        board.animateBox(box);

        expect(boxes.animate).toHaveBeenCalledWith(box);
    });
});
