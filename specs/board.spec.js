/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Board", function () {
    /** @var {Object} Fake spy for the board animations */
    var animation;

    /** @var {Board} */
    var board;

    /** @var {Object} Fake spy for the board's display */
    var display;

    /** @var {Object} Fake spy for the animation's audio */
    var audio;

    beforeEach(function () {
        animation = {
            animate: function () {},
            animateBoxNumbered: function () {}
        };
        display = {
            gameOverMessage: function () {},
            welcomeMessage: function () {},
            updateScore: function () {}
        };
        audio = {
            play: function () {}
        };
        board = new Board(animation, display, audio);
    });

    it("animates a full sequence", function () {
        spyOn(animation, "animate");

        board.animateSequence();

        expect(animation.animate).toHaveBeenCalled();
    });

    it("animates a single box", function () {
        var box = 3;
        spyOn(animation, "animateBoxNumbered");

        board.highlightBox(box);

        expect(animation.animateBoxNumbered).toHaveBeenCalledWith(box);
    });

    it("gets highlighted when the game is over", function () {
        spyOn(audio, "play");
        spyOn(display, "gameOverMessage");

        board.gameOver();

        expect(audio.play).toHaveBeenCalled();
        expect(display.gameOverMessage).toHaveBeenCalled();
    });

    it("shows a welcome message when the game starts", function () {
        spyOn(display, "welcomeMessage");

        board.reset();

        expect(display.welcomeMessage).toHaveBeenCalled();
    });

    it("updates the player score", function () {
        spyOn(display, "updateScore");

        board.updateScore(2);

        expect(display.updateScore).toHaveBeenCalled();
    });
});
