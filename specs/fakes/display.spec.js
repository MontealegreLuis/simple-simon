/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Display", function () {
    var $panel;
    var display;

    beforeEach(function () {
        $panel = {
            html: function () {},
            addClass: function () {},
            removeClass: function () { return this; },
            children: function () { return this; }
        };
        display = new Display($panel);
    });

    it("shows a welcome message", function () {
        var message = "Simple Simon";
        spyOn($panel, "html");

        display.welcomeMessage(message);

        expect($panel.html.calls.mostRecent().args[0]).toMatch(message);
    });

    it("shows a game over message", function () {
        var message = "Game over...";
        spyOn($panel, "html");

        display.gameOverMessage(message);

        expect($panel.html.calls.mostRecent().args[0]).toMatch(message);
    });

    it("displays the current score", function () {
        var score = "5";
        spyOn($panel, "html");

        display.updateScore(score);

        expect($panel.html.calls.mostRecent().args[0]).toMatch(score);
    });
});
