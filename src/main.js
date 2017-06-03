/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import $ from 'jquery';
import Sequence from './sequence';
import RandomGenerator from './random-generator';
import Game from './game';
import Boxes from './boxes';
import Board from './board';
import BoardAnimation from './board-animation';
import Display from './display';
import Player from './player';
import Simon from './simon';

const $boxes = $('[data-box]');
const game = new Game(
    new Board(
        new BoardAnimation(new Boxes($boxes, [
            new Audio('audio/box01.mp3'),
            new Audio('audio/box02.mp3'),
            new Audio('audio/box03.mp3'),
            new Audio('audio/box04.mp3')
        ])),
        new Display($('[data-board]')),
        new Audio('audio/doh.mp3')
    ),
    new Simon(new Sequence(new RandomGenerator(0, $boxes.length - 1))),
    new Player()
);
$('[data-start-game]').on('click', () => { game.start(); });
$boxes.each(function () {
    const $box = $(this);
    $box.on('click', () => {
        game.play($box.data('value'));
    });
});
