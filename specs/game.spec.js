/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Game", function () {
    it("starts the game", function () {
        var simon = {
            start: function(){},
            animate: function() {}
        };
        var player = {
            restart: function () {}
        };
        var board = {
            reset: function () {}
        };
        spyOn(simon, "start");
        spyOn(simon, "animate");
        spyOn(player, "restart");
        spyOn(board, "reset");

        var game = new Game(board, simon, player);
        game.start();

        expect(board.reset).toHaveBeenCalled();
        expect(player.restart).toHaveBeenCalled();
        expect(simon.start).toHaveBeenCalled();
        expect(simon.animate).toHaveBeenCalled();
    });

    it("finishes the game if the player's choice is incorrect", function(){
        var wrongBox = 5;
        var player = {
            matches: function () { return false; }
        };
        var board = {
            gameOver: function () {}
        };
        spyOn(board, "gameOver");

        var game = new Game(board, null, player);
        game.play(wrongBox);

        expect(board.gameOver).toHaveBeenCalled();
    });

    it("continues if the player's sequence is correct but incomplete", function () {
        var player = {
            matches: function () { return true; },
            isWinner: function () { return false; }
        };
        var simon = {
            nextRound: function(){},
            animate: function() {},
            sequenceSize: function () {}
        };
        var board = {
            updateScore: function () {}
        };
        spyOn(simon, "nextRound");
        spyOn(board, "updateScore");

        var game = new Game(board, simon, player);
        game.play(5);

        expect(board.updateScore).not.toHaveBeenCalledWith();
        expect(simon.nextRound).not.toHaveBeenCalled();
    });

    it("generates a new round if the player's sequence is correct and complete", function () {
        var player = {
            matches: function () { return true; },
            isWinner: function () { return true; },
            restart: function () {}
        };
        var simon = {
            nextRound: function(){},
            animate: function() {},
            sequenceSize: function () { return 3; }
        };
        var board = {
            updateScore: function () {}
        };
        spyOn(simon, "nextRound");
        spyOn(simon, "animate");
        spyOn(player, "restart");
        spyOn(board, "updateScore");

        var game = new Game(board, simon, player);
        game.play(5);

        expect(board.updateScore).toHaveBeenCalledWith(3);
        expect(simon.nextRound).toHaveBeenCalled();
        expect(simon.animate).toHaveBeenCalled();
        expect(player.restart).toHaveBeenCalled();
    });
});
