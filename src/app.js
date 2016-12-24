/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function ($) {
    var $boxes = $("[data-box]");
    var sequence = new Sequence(new RandomGenerator(0, $boxes.length - 1));
    var game = new Game(
        new Board(
            new BoardAnimation(sequence, new Boxes($boxes, [
                new Audio('audio/box01.mp3'),
                new Audio('audio/box02.mp3'),
                new Audio('audio/box03.mp3'),
                new Audio('audio/box04.mp3')
            ])),
            new Display($("[data-board]")),
            new Audio('audio/doh.mp3')
        ),
        new Simon(sequence),
        new Player()
    );
    $("[data-start-game]").on("click", game.start);
    $boxes.each(function () {
        var $box = $(this);
        $box.on('click', function () {
            game.play($box.data("value"))
        });
    });
})(jQuery);
