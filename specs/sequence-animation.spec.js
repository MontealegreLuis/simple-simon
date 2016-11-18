/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("SequenceAnimation", function () {
    beforeEach(function() {
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("animates a single element", function () {
        var boxes = {
            animate: function () {}
        };
        var element = [4];
        var animation = new SequenceAnimation(new Sequence(element), boxes);
        spyOn(boxes, "animate");

        animation.animate();

        jasmine.clock().tick(1001);

        expect(boxes.animate).toHaveBeenCalledWith(4);
    });

    it("animates a sequence with several elements", function () {
        var boxes = {
            animate: function () {}
        };
        var elements = [4, 3, 0];
        var animation = new SequenceAnimation(new Sequence(elements), boxes);
        spyOn(boxes, "animate");

        animation.animate();

        jasmine.clock().tick(1001);
        jasmine.clock().tick(1000);
        jasmine.clock().tick(1000);

        expect(boxes.animate).toHaveBeenCalledWith(4);
        expect(boxes.animate).toHaveBeenCalledWith(3);
        expect(boxes.animate).toHaveBeenCalledWith(0);
    });
});
