/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Board", function () {
    it("animates a full sequence", function () {
        var $boxes = {
            animate: function (sequence) {}
        };
        spyOn($boxes, "animate");
        var board = new Board($boxes);
        var sequence = [3, 1, 0, 2];

        board.animateSequence(sequence);

        expect($boxes.animate).toHaveBeenCalledWith(sequence);
    });

    it("animates a single box", function () {
        var $boxes = {
            animate: function (sequence) {}
        };
        spyOn($boxes, "animate");
        var board = new Board($boxes);
        var box = 3;

        board.animateBox(box);

        expect($boxes.animate).toHaveBeenCalledWith([box]);
    });
});
