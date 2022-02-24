"use strict";



const assert = require("assert");



/**
 * 
 * @param {number} num - number.
 * @returns {number} sum of number.
 */
function sumDigit(num) {
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);

    }
    return sum;
}

/**
 * 
 * @param {number} num - number.
 * @returns {number} product of number.
 */
function multDigits(num) {
    let multiple = 1;
    while (num > 0) {
        multiple *= num % 10;
        num = Math.floor(num / 10);

    }
    return multiple;
}


describe(" sumDigit", function () {
    it(" sumDigit expect 10", function () {
        assert.equal(sumDigit(1234), 10);

    });
    it(" sumDigit expect 3", function () {
        assert.equal(sumDigit(102), 3);

    });
    it(" sumDigit expect 8", function () {
        assert.equal(sumDigit(8), 8);

    });

});


describe(" multDigits", function () {
    it(" multDigits expect 10", function () {
        assert.equal(multDigits(1234), 24);

    });
    it(" multDigits expect 3", function () {
        assert.equal(multDigits(102), 0);

    });
    it(" multDigits expect 8", function () {
        assert.equal(multDigits(8), 8);

    });

});