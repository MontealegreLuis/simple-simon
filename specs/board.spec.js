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
        var board = new Board(null, animation, null);

        board.animateSequence();

        expect(animation.animate).toHaveBeenCalled();
    });

    it("animates a single box", function () {
        var boxes = {
            animate: function (sequence) {}
        };
        spyOn(boxes, "animate");
        var board = new Board(boxes, null, null);
        var box = 3;

        board.animateBox(box);

        expect(boxes.animate).toHaveBeenCalledWith(box);
    });

    it("gets highlighted when the game is over", function () {
        var panel = {
            removeClass: function () {},
            addClass: function () {},
            children: function () {},
            html: function () {}
        };
        spyOn(panel, "removeClass").and.returnValue(panel);
        spyOn(panel, "addClass");
        spyOn(panel, "children").and.returnValue(panel);
        spyOn(panel, "html");
        var board = new Board(null, null, panel);

        board.gameOver();

        expect(panel.removeClass).toHaveBeenCalled();
        expect(panel.addClass).toHaveBeenCalled();
        expect(panel.children).toHaveBeenCalled();
        expect(panel.html).toHaveBeenCalled();
    });
});
