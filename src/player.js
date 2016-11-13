/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    function Player(board) {
        var sequence;

        this.play = function (box) {
            sequence = sequence || [];
            sequence.push(box);
        };
        this.matches = function (simon) {
            var won = simon.verify(sequence);
            if (!won) {
                board.gameOver();
            }
            return won;
        };
    }

    window.Player = Player;
})(window);
