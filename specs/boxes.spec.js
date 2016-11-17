/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Boxes", function () {
    it("animates a sequence with a single element", function () {
        var $boxes = {
            eq: function() { return this; },
            animate: function() { return this; }
        };
        spyOn($boxes, "eq").and.returnValue($boxes);

        var boxes = new Boxes($boxes);
        boxes.animate([2]);

        expect($boxes.eq).toHaveBeenCalledWith(2);
    });

    it("animates a sequence with several elements", function () {
        var $boxes = {
            eq: function() {},
            animate: function(property, options) {
                if (options && options.complete) options.complete.call();

                return this;
            }
        };
        spyOn($boxes, "eq").and.returnValues($boxes, $boxes, $boxes);

        var boxes = new Boxes($boxes);
        boxes.animate([4, 3, 0]);

        expect($boxes.eq).toHaveBeenCalledWith(4);
        expect($boxes.eq).toHaveBeenCalledWith(3);
        expect($boxes.eq).toHaveBeenCalledWith(0);
    })
});
