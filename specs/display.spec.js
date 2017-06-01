/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Display from '../src/display';

describe('Display', () => {
    /** @var {Object} Spy the HTML element that displays the current status of the game */
    let $panel;

    /** @var {Display} The display for the game */
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

    it('shows a welcome message', () => {
        const message = 'Simple Simon';
        spyOn($panel, 'html');

        display.welcomeMessage(message);

        expect($panel.html.calls.mostRecent().args[0]).toMatch(message);
    });

    it('shows a game over message', () => {
        const message = 'Game over...';
        spyOn($panel, 'html');

        display.gameOverMessage(message);

        expect($panel.html.calls.mostRecent().args[0]).toMatch(message);
    });

    it('displays the current score', () => {
        const score = '5';
        spyOn($panel, 'html');

        display.updateScore(score);

        expect($panel.html.calls.mostRecent().args[0]).toMatch(score);
    });
});
