/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Board", function () {
    /** @var {Object} Fake spy for the board animations */
    var animation;

    /** @var {Board} */
    var board;

    /** @var {Object} Fake spy for the board's panel */
    var panel;

    /** @var {Object} Fake spy for the animation's audio */
    var audio;

    beforeEach(function () {
        animation = {
            animate: function () {},
            animateBox: function () {}
        };
        panel = {
            removeClass: function () {},
            addClass: function () {},
            children: function () {},
            html: function () {}
        };
        audio = {
            play: function () {}
        };
        board = new Board(animation, panel, audio);
    });

    it("animates a full sequence", function () {
        spyOn(animation, "animate");

        board.animateSequence();

        expect(animation.animate).toHaveBeenCalled();
    });

    it("animates a single box", function () {
        var box = 3;
        spyOn(animation, "animateBox");

        board.animateBox(box);

        expect(animation.animateBox).toHaveBeenCalledWith(box);
    });

    it("gets highlighted when the game is over", function () {
        spyOn(panel, "removeClass").and.returnValue(panel);
        spyOn(panel, "addClass");
        spyOn(panel, "children").and.returnValue(panel);
        spyOn(panel, "html");
        spyOn(audio, "play");

        board.gameOver();

        expect(audio.play).toHaveBeenCalled();
        expect(panel.removeClass).toHaveBeenCalled();
        expect(panel.addClass).toHaveBeenCalled();
        expect(panel.children).toHaveBeenCalled();
        expect(panel.html).toHaveBeenCalled();
    });

    it("resets its styling when the game starts", function () {
        spyOn(panel, "removeClass").and.returnValue(panel);
        spyOn(panel, "addClass");
        spyOn(panel, "children").and.returnValue(panel);
        spyOn(panel, "html");

        board.reset();

        expect(panel.removeClass).toHaveBeenCalled();
        expect(panel.addClass).toHaveBeenCalled();
        expect(panel.children).toHaveBeenCalled();
        expect(panel.html).toHaveBeenCalled();
    });

    it("updates the player score", function () {
        spyOn(panel, "children").and.returnValue(panel);
        spyOn(panel, "html");

        board.updateScore(2);

        expect(panel.children).toHaveBeenCalled();
        expect(panel.html).toHaveBeenCalled();
    });
});
