/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
(function ($) {
    var $boxes = $(".well");
    var board = new Board(new Boxes($boxes));
    var game = new Game(
        board,
        new Simon(board, new RandomGenerator(0, $boxes.length - 1)),
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
