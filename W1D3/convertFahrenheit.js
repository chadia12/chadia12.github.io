"use strict";

const assert = require("assert");
/**
 * 
 * @param {number} fahrenheit - Temperature.
 * @returns {number} - temperature in celcuis
 */
function convertFahrenheit(fahrenheit) {
    let celcuis = Number((fahrenheit - 32) * 5 / 9);
    return celcuis = celcuis.toFixed(4);
}

describe("convertFahrenheit ", function () {
    it("expect 0: ", function () {
        assert.equal(convertFahrenheit(32), 0);
    });

    it("expect -17.7778: ", function () {
        assert.equal(convertFahrenheit(0), -17.7778);
    });
    it("expect 100: ", function () {
        assert.equal(convertFahrenheit(212), 100);
    });
    it("expect 37.7778: ", function () {
        assert.equal(convertFahrenheit(100), 37.7778);
    });

});