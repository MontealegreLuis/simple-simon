/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function ($) {
    var $boxes = $("[data-box]");
    var boxesAudio = [
        new Audio('audio/box01.mp3'),
        new Audio('audio/box02.mp3'),
        new Audio('audio/box03.mp3'),
        new Audio('audio/box04.mp3')
    ];
    var sequence = new Sequence(new RandomGenerator(0, $boxes.length - 1));
    var board = new Board(
        new BoardAnimation(sequence, new Boxes($boxes, boxesAudio)),
        $("[data-board]"),
        new Audio('audio/doh.mp3')
    );
    var game = new Game(
        board,
        new Simon(board, sequence),
        new Player(board)
    );
    $("[data-start-game]").on("click", game.start);
    $boxes.each(function () {
        var $box = $(this);
        $box.on('click', function () {
            game.play($(this).data("value"))
        });
    });
})(jQuery);
