/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Game from '../src/game';

describe('Game', () => {
    // Spies
    let player, simon, board;

    let sequenceSize = 3;

    /** @var {Game} */
    let game;

    beforeEach(() => {
        player = {
            isCorrect: () => { return true; },
            winsRound: () => { return true; },
            restart: () => {},
            select: () => {}
        };
        simon = {
            start: () => {},
            nextRound: () => {},
            roundNumber: () => { return sequenceSize; }
        };
        board = {
            updateScore: () => {},
            animateSequence: () => {},
            reset: () => {},
            gameOver: () => {},
            highlightBox: () => {}
        };
        game = new Game(board, simon, player);
    });

    it('starts the game', () => {
        spyOn(simon, 'start');
        spyOn(board, 'animateSequence');
        spyOn(player, 'restart');
        spyOn(board, 'reset');

        game.start();

        expect(board.reset).toHaveBeenCalled();
        expect(player.restart).toHaveBeenCalled();
        expect(simon.start).toHaveBeenCalled();
        expect(board.animateSequence).toHaveBeenCalled();
    });

    it('finishes the game if the player\'s choice is incorrect', () => {
        const wrongBox = 5;
        player.isCorrect = () => { return false; };
        spyOn(board, 'gameOver');

        game.play(wrongBox);

        expect(board.gameOver).toHaveBeenCalled();
    });

    it('continues if the player\'s sequence is correct but incomplete', () => {
        const correctBox = 5;
        player.winsRound = () => { return false; };
        spyOn(simon, 'nextRound');
        spyOn(board, 'updateScore');

        game.play(correctBox);

        expect(board.updateScore).not.toHaveBeenCalledWith();
        expect(simon.nextRound).not.toHaveBeenCalled();
    });

    it('generates a new round if the player\'s sequence is correct and complete', () => {
        const correctBox = 5;
        spyOn(simon, 'nextRound');
        spyOn(board, 'animateSequence');
        spyOn(player, 'restart');
        spyOn(board, 'updateScore');

        game.play(correctBox);

        expect(board.updateScore).toHaveBeenCalledWith(sequenceSize);
        expect(simon.nextRound).toHaveBeenCalled();
        expect(board.animateSequence).toHaveBeenCalled();
        expect(player.restart).toHaveBeenCalled();
    });
});
