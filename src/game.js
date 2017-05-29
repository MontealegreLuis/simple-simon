/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
class Game {
    /**
     * @param {Board} board
     * @param {Simon} simon
     * @param {Player} player
     */
    constructor(board, simon, player) {
        this.board = board;
        this.simon = simon;
        this.player = player;
    }

    /**
     * Generates the first random element in the sequence and animates the board
     */
    start() {
        this.board.reset();
        this.player.restart();
        this.simon.start();
        this.board.animateSequence();
    }

    /**
     * If the current box is incorrect, the game is over.
     * If the current sequence is correct the game continues.
     * If the whole sequence is correct Simon generates one more random value.
     *
     * @param {Number} box
     */
    play(box) {
        this.player.play(box);
        this.board.highlightBox(box);

        if (!this.player.winsTurn(this.simon)) {
            this.board.gameOver();
            return;
        }

        if (this.player.winsRound(this.simon)) {
            this.board.updateScore(this.simon.roundNumber());
            this.simon.nextRound();
            this.board.animateSequence();
            this.player.restart();
        }
    }
}
