/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Board", function () {
    it("animates a full sequence", function () {
        var $boxes = {
            animateSequence: function () {}
        };
        spyOn($boxes, "animateSequence");
        var board = new Board($boxes);
        var sequence = [3, 1, 0, 2];

        board.animateSequence(sequence);

        expect($boxes.animateSequence).toHaveBeenCalledWith(sequence);
    });

    it("animates a single box", function () {
        var $boxes = {
            animateBox: function (sequence) {}
        };
        spyOn($boxes, "animateBox");
        var board = new Board($boxes);
        var box = 3;

        board.animateBox(box);

        expect($boxes.animateBox).toHaveBeenCalledWith(box);
    });
});
