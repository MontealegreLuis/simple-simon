/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
import BoardAnimation from '../src/board-animation';
import Sequence from '../src/sequence';
import ArrayGenerator from './fakes/array-generator';

describe('BoardAnimation', () => {
    /** @var {Object} Spy for the board boxes */
    let boxes;

    /** @var {ArrayGenerator} Fake sequence generator */
    let generator;

    /** @var {Sequence} */
    let sequence;

    /** @var {BoardAnimation} */
    let animation;

    beforeEach(() => {
        jasmine.clock().install();
        boxes = {animate: () => {}};
        spyOn(boxes, 'animate');
        generator = new ArrayGenerator();
        sequence = new Sequence(generator);
        animation = new BoardAnimation(boxes);
    });

    afterEach(() => {
        jasmine.clock().uninstall();
    });

    it('animates a single element', () => {
        const element = 4;
        generator.changeSequence([element]);
        sequence.append();

        animation.animate(sequence);
        jasmine.clock().tick(1001);

        expect(boxes.animate).toHaveBeenCalledWith(element);
    });

    it('animates a sequence with several elements', () => {
        generator.changeSequence([4, 3, 0]);
        sequence.append();
        sequence.append();
        sequence.append();

        animation.animate(sequence);
        jasmine.clock().tick(1001);
        jasmine.clock().tick(1000);
        jasmine.clock().tick(1000);

        expect(boxes.animate).toHaveBeenCalledWith(4);
        expect(boxes.animate).toHaveBeenCalledWith(3);
        expect(boxes.animate).toHaveBeenCalledWith(0);
    });

    it('animates a specific box', () => {
        animation.animateBoxNumbered(4);

        expect(boxes.animate).toHaveBeenCalledWith(4);
    });
});
