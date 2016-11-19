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
        spyOn(simon, "start");
        spyOn(simon, "animate");
        spyOn(player, "restart");

        var game = new Game(null, simon, player);
        game.start();

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
            animate: function() {}
        };
        spyOn(simon, "nextRound");
        spyOn(simon, "animate");

        var game = new Game(null, simon, player);
        game.play(5);

        expect(simon.nextRound).not.toHaveBeenCalled();
        expect(simon.animate).not.toHaveBeenCalled();
    });

    it("generates a new round if the player's sequence is correct and complete", function () {
        var player = {
            matches: function () { return true; },
            isWinner: function () { return true; },
            restart: function () {}
        };
        var simon = {
            nextRound: function(){},
            animate: function() {}
        };
        spyOn(simon, "nextRound");
        spyOn(simon, "animate");
        spyOn(player, "restart");

        var game = new Game(null, simon, player);
        game.play(5);

        expect(simon.nextRound).toHaveBeenCalled();
        expect(simon.animate).toHaveBeenCalled();
        expect(player.restart).toHaveBeenCalled();
    });
});
