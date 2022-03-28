"use strict";
const functionsBalance = require("./question3.js");
const returnBalance = functionsBalance.returnBalance;
const assert = require("assert");

describe("returnBalance", function () {
    it("tests compound 110.47 ", function () {
        assert.equal(returnBalance(100, 10, 1), 110.47);
    });
    it("tests compound interest 16470.09 ", function () {
        assert.equal(returnBalance(10000, 5, 10), 16470.09);
    });
});