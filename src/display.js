/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function (window) {
    "use strict";

    var formatMessage = function (message) {
        return "<strong>" + message + "</strong>";
    };

    function Display($panel) {
        this.gameOverMessage = function (message) {
            $panel
                .removeClass("panel-default")
                .addClass("panel-danger")
            ;
            $panel
                .children("[data-board-title]")
                .html(formatMessage(message))
            ;
        };

        this.welcomeMessage = function (message) {
            $panel
                .removeClass("panel-danger")
                .addClass("panel-default")
            ;
            $panel
                .children("[data-board-title]")
                .html(formatMessage(message))
            ;
        };

        this.updateScore = function (currentScore) {
            $panel
                .children(".panel-heading")
                .html(formatMessage("Score " + currentScore))
            ;
        };
    }

    window.Display = Display;
})(window);
