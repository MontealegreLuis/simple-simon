/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Player", () => {
    /** @var {ArrayGenerator} Fake generator */
    let generator;

    /** @var {Object} Fake spy of Board */
    let board;

    /** @var {Simon} */
    let simon;

    /** @var {Player} */
    let player;

    beforeEach(() => {
        board = {
            highlightBox: (box) => {}
        };
        generator = new ArrayGenerator([3, 2, 1, 0]);
        player = new Player(board);
        simon = new Simon(new Sequence(generator));
    });

    it("verifies a sequence with a single element", () => {
        const simonNumber = 3;

        simon.start();

        expect(player.winsTurn(simon)).toBe(true);
    });

    it("verifies a full sequence with several elements", () => {
        const simonNumbers = [3, 2, 1, 0];

        simon.start();
        player.play(simonNumbers[0]);
        simon.nextRound();
        player.play(simonNumbers[1]);
        simon.nextRound();
        player.play(simonNumbers[2]);
        simon.nextRound();
        player.play(simonNumbers[3]);

        expect(player.winsRound(simon)).toBe(true);
    });

    it("updates the board if player does not win", () => {
        simon.verify = () => { return false; };

        expect(player.winsTurn(simon)).toBe(false);
    });

    it("resets its sequence", () => {
        player.restart();

        // Comparing 2 empty sequences should be true
        expect(player.winsRound(simon)).toBe(true);
    })
});
