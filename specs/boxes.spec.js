/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Boxes", function () {
    var boxAnimation;
    beforeEach(function() {
        boxAnimation = jasmine.createSpy("boxAnimation");
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it("animates a sequence with a single element", function () {
        var $boxes = {
            eq: function () {},
            animate: function(){ return this; }

        };
        spyOn($boxes, "eq").and.returnValue($boxes);

        var boxes = new Boxes($boxes, boxAnimation);

        boxes.animate([2]);

        expect($boxes.eq).toHaveBeenCalledWith(2);
    });

    it("animates a sequence with several elements", function () {
        var $boxes = {};

        var boxes = new Boxes($boxes, boxAnimation);
        boxes.animate([4, 3, 0]);

        jasmine.clock().tick(1001);
        jasmine.clock().tick(1000);
        jasmine.clock().tick(1000);

        expect(boxAnimation.calls.count()).toBe(3);
    })
});
