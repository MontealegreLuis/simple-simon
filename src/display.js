/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
class Display {

    /** @param {jQuery} $panel */
    constructor($panel) {
        this.$panel = $panel;
    }

    /** @param {String} message */
    gameOverMessage(message) {
        this.$panel
            .removeClass("panel-default")
            .addClass("panel-danger")
        ;
        this.$panel
            .children("[data-board-title]")
            .html(Display._formatMessage(message))
        ;
    }

    /** @param {String} message */
    welcomeMessage(message) {
        this.$panel
            .removeClass("panel-danger")
            .addClass("panel-default")
        ;
        this.$panel
            .children("[data-board-title]")
            .html(Display._formatMessage(message))
        ;
    }

    /** @param {Number} currentScore */
    updateScore(currentScore) {
        this.$panel
            .children(".panel-heading")
            .html(Display._formatMessage("Score " + currentScore))
        ;
    }

    /** @param {String} message */
    static _formatMessage(message) {
        return "<strong>" + message + "</strong>";
    }
}
