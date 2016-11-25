/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("SequenceAnimation", function () {
    var boxes;
    var generator;
    var sequence;
    var animation;

    beforeEach(function() {
        jasmine.clock().install();
        boxes = {
            animate: function () {}
        };
        spyOn(boxes, "animate");
        generator = {
            sequence: null,
            generate: function() {
                return this.sequence.shift();
            }
        };
        sequence = new Sequence(generator);
        animation = new SequenceAnimation(sequence, boxes);
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("animates a single element", function () {
        var element = 4;
        generator.sequence = [element];
        sequence.append();

        animation.animate();
        jasmine.clock().tick(1001);

        expect(boxes.animate).toHaveBeenCalledWith(element);
    });

    it("animates a sequence with several elements", function () {
        generator.sequence = [4, 3, 0];
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
});
