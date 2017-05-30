/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Display from '../src/display';

describe("Display", () => {
    let $panel;
    let display;

    beforeEach(() => {
        $panel = {
            html: () => {},
            addClass: () => {},
            removeClass: function () { return this; },
            children: function () { return this; }
        };
        display = new Display($panel);
    });

    it("shows a welcome message", () => {
        const message = "Simple Simon";
        spyOn($panel, "html");

        display.welcomeMessage(message);

        expect($panel.html.calls.mostRecent().args[0]).toMatch(message);
    });

    it("shows a game over message", () => {
        const message = "Game over...";
        spyOn($panel, "html");

        display.gameOverMessage(message);

        expect($panel.html.calls.mostRecent().args[0]).toMatch(message);
    });

    it("displays the current score", () => {
        const score = "5";
        spyOn($panel, "html");

        display.updateScore(score);

        expect($panel.html.calls.mostRecent().args[0]).toMatch(score);
    });
});
