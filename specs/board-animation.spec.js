/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("BoardAnimation", function () {
    /** @var {Object} Fake spy for the board boxes */
    let boxes;

    /** @var {ArrayGenerator} Fake sequence generator */
    let generator;

    /** @var {Sequence} */
    let sequence;

    /** @var {BoardAnimation} */
    let animation;

    beforeEach(function() {
        jasmine.clock().install();
        boxes = {
            animate: function () {}
        };
        spyOn(boxes, "animate");
        generator = new ArrayGenerator();
        sequence = new Sequence(generator);
        animation = new BoardAnimation(sequence, boxes);
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("animates a single element", function () {
        var element = 4;
        generator.changeSequence([element]);
        sequence.append();

        animation.animate();
        jasmine.clock().tick(1001);

        expect(boxes.animate).toHaveBeenCalledWith(element);
    });

    it("animates a sequence with several elements", function () {
        generator.changeSequence([4, 3, 0]);
        sequence.append();
        sequence.append();
        sequence.append();

        animation.animate();
        jasmine.clock().tick(1001);
        jasmine.clock().tick(1000);
        jasmine.clock().tick(1000);

        expect(boxes.animate).toHaveBeenCalledWith(4);
        expect(boxes.animate).toHaveBeenCalledWith(3);
        expect(boxes.animate).toHaveBeenCalledWith(0);
    });

    it("animates a specific box", function () {
        animation.animateBoxNumbered(4);

        expect(boxes.animate).toHaveBeenCalledWith(4);
    });
});
