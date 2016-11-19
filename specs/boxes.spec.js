/**
 * This source file is subject to the license that is bundled with this package in the file LICENSE.
 */
"use strict";

describe("Boxes", function () {
    it("animates the first box", function () {
        var $boxes = {
            eq: function () {},
            animate: function(){ return this; }

        };
        spyOn($boxes, "eq").and.returnValue($boxes);

        var firstBox = 0;
        var boxes = new Boxes($boxes);

        boxes.animate(firstBox);

        expect($boxes.eq).toHaveBeenCalledWith(firstBox);
    });

    it("animates the last box", function () {
        var $boxes = {
            eq: function () {},
            animate: function(){ return this; }

        };
        spyOn($boxes, "eq").and.returnValue($boxes);

        var lastBox = 3;
        var boxes = new Boxes($boxes);

        boxes.animate(lastBox);

        expect($boxes.eq).toHaveBeenCalledWith(lastBox);
    });
});
