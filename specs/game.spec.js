/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Game", function () {
    // Spies
    var player, simon, board;

    var sequenceSize = 3;

    /** @var {Game} */
    var game;

    beforeEach(function () {
        player = {
            matches: function () { return true; },
            isWinner: function () { return true; },
            restart: function () {}
        };
        simon = {
            start: function(){},
            nextRound: function(){},
            sequenceSize: function () { return sequenceSize; }
        };
        board = {
            updateScore: function () {},
            animateSequence: function() {},
            reset: function () {},
            gameOver: function () {}
        };
        game = new Game(board, simon, player);
    });

    it("starts the game", function () {
        spyOn(simon, "start");
        spyOn(board, "animateSequence");
        spyOn(player, "restart");
        spyOn(board, "reset");

        game.start();

        expect(board.reset).toHaveBeenCalled();
        expect(player.restart).toHaveBeenCalled();
        expect(simon.start).toHaveBeenCalled();
        expect(board.animateSequence).toHaveBeenCalled();
    });

    it("finishes the game if the player's choice is incorrect", function(){
        var wrongBox = 5;
        player.matches = function () { return false; };
        spyOn(board, "gameOver");

        game.play(wrongBox);

        expect(board.gameOver).toHaveBeenCalled();
    });

    it("continues if the player's sequence is correct but incomplete", function () {
        var correctBox = 5;
        player.isWinner = function () { return false; };
        spyOn(simon, "nextRound");
        spyOn(board, "updateScore");

        game.play(correctBox);

        expect(board.updateScore).not.toHaveBeenCalledWith();
        expect(simon.nextRound).not.toHaveBeenCalled();
    });

    it("generates a new round if the player's sequence is correct and complete", function () {
        var correctBox = 5;
        spyOn(simon, "nextRound");
        spyOn(board, "animateSequence");
        spyOn(player, "restart");
        spyOn(board, "updateScore");

        game.play(correctBox);

        expect(board.updateScore).toHaveBeenCalledWith(sequenceSize);
        expect(simon.nextRound).toHaveBeenCalled();
        expect(board.animateSequence).toHaveBeenCalled();
        expect(player.restart).toHaveBeenCalled();
    });
});
