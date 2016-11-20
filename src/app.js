/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function ($) {
    var $boxes = $(".well");
    var boxesAudio = [
        new Audio('audio/box01.mp3'),
        new Audio('audio/box02.mp3'),
        new Audio('audio/box03.mp3'),
        new Audio('audio/box04.mp3')
    ];
    var boxes = new Boxes($boxes, boxesAudio);
    var sequence = new Sequence();
    var board = new Board(
        boxes,
        new SequenceAnimation(sequence, boxes),
        $(".panel-default"),
        new Audio('audio/doh.mp3')
    );
    var game = new Game(
        board,
        new Simon(board, sequence, new RandomGenerator(0, $boxes.length - 1)),
        new Player(board)
    );
    $("#start-game").on("click", game.start);
    $boxes.each(function () {
        var $box = $(this);
        $box.on('click', function () {
            game.play($(this).data("value"))
        });
    });
})(jQuery);
