/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Board from '../src/board';

describe('Board', () => {
    /** @var {Object} Spy for the board animations */
    let animation;

    /** @var {Board} */
    let board;

    /** @var {Object} Spy for the board's display */
    let display;

    /** @var {Object} Spy for the animation's audio */
    let audio;

    beforeEach(() => {
        animation = {
            animate: () => {},
            animateBoxNumbered: () => {}
        };
        display = {
            gameOverMessage: () => {},
            welcomeMessage: () => {},
            updateScore: () => {}
        };
        audio = {play: () => {}};
        board = new Board(animation, display, audio);
    });

    it('animates a full sequence', () => {
        spyOn(animation, 'animate');

        board.animateSequence();

        expect(animation.animate).toHaveBeenCalled();
    });

    it('animates a single box', () => {
        const box = 3;
        spyOn(animation, 'animateBoxNumbered');

        board.highlightBox(box);

        expect(animation.animateBoxNumbered).toHaveBeenCalledWith(box);
    });

    it('gets highlighted when the game is over', () => {
        spyOn(audio, 'play');
        spyOn(display, 'gameOverMessage');

        board.gameOver();

        expect(audio.play).toHaveBeenCalled();
        expect(display.gameOverMessage).toHaveBeenCalled();
    });

    it('shows a welcome message when the game starts', () => {
        spyOn(display, 'welcomeMessage');

        board.reset();

        expect(display.welcomeMessage).toHaveBeenCalled();
    });

    it('updates the player score', () => {
        spyOn(display, 'updateScore');

        board.updateScore(2);

        expect(display.updateScore).toHaveBeenCalled();
    });
});
