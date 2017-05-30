/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import Player from '../src/player';
import Simon from '../src/simon';
import Sequence from '../src/sequence';
import ArrayGenerator from './fakes/array-generator';

describe('Player', () => {
    /** @var {ArrayGenerator} Fake generator */
    let generator;

    /** @var {Object} Fake spy of Board */
    let board;

    /** @var {Simon} */
    let simon;

    /** @var {Player} */
    let player;

    beforeEach(() => {
        board = { highlightBox: (box) => {} };
        generator = new ArrayGenerator([3, 2, 1, 0]);
        player = new Player(board);
        simon = new Simon(new Sequence(generator));
    });

    it('verifies a full sequence with a single element', () => {
        const correctNumber = 3;

        simon.start();
        player.play(correctNumber);

        expect(player.winsTurn(simon)).toBe(true);
    });

    it('verifies a full sequence with several elements', () => {
        const correctNumbers = [3, 2, 1, 0];

        simon.start();
        player.play(correctNumbers[0]);
        simon.nextRound();
        player.play(correctNumbers[1]);
        simon.nextRound();
        player.play(correctNumbers[2]);
        simon.nextRound();
        player.play(correctNumbers[3]);

        expect(player.winsRound(simon)).toBe(true);
    });

    it('recognizes an incorrect sequence', () => {
        const incorrectNumber = 300;

        simon.start();
        player.play(incorrectNumber);

        expect(player.winsTurn(simon)).toBe(false);
    });

    it('restarts with an empty sequence', () => {
        player.restart();

        // Comparing 2 empty sequences should be true
        expect(player.winsRound(simon)).toBe(true);
    });
});
