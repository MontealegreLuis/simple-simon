/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */

/**
 * It represents the interactions between the player, the sequence and the board
 */
export default class Game {
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
        this.board.animateSequence(this.simon.sequence);
    }

    /**
     * If the current box is incorrect, the game is over.
     * If the current sequence is correct the game continues.
     * If the whole sequence is correct Simon generates one more random value.
     *
     * @param {Number} box
     */
    play(box) {
        this.player.select(box);
        this.board.highlightBox(box);

        if (!this.player.isCorrect(this.simon)) {
            this.board.gameOver();
            return;
        }

        if (this.player.winsRound(this.simon)) {
            this._levelUp();
        }
    }

    _levelUp() {
        this.board.updateScore(this.simon.roundNumber());
        this.simon.nextRound();
        this.board.animateSequence(this.simon.sequence);
        this.player.restart();
    }
}
