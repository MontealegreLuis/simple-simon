/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */

/**
 * It updates the UI according to the current state of the game
 */
export default class Board {
    /**
     * @param {BoardAnimation} animation
     * @param {Display} display
     * @param {Audio} gameOverSound
     */
    constructor(animation, display, gameOverSound) {
        this.animation = animation;
        this.display = display;
        this.gameOverSound = gameOverSound;
    }

    gameOver() {
        this.gameOverSound.play();
        this.display.gameOverMessage('Game over...');
    }

    reset() {
        this.display.welcomeMessage('Simple Simon');
    }

    /** @param {Number} currentScore */
    updateScore(currentScore) {
        this.display.updateScore(currentScore);
    }

    animateSequence(sequence) {
        this.animation.animate(sequence);
    }

    /** @param {Number} index */
    highlightBox(index) {
        this.animation.animateBoxAt(index);
    }
}
