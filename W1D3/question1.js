"use strict";
/* global assert isVowel*/
/* isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false
otherwise. */


const assert = require("assert");

// console.log(isVowel("a"));
// console.log(isVowel("e"));
// console.log(isVowel("i"));
// console.log(isVowel("o"));
// console.log(isVowel("u"));
// console.log(isVowel("z"));
// console.log(isVowel("5"));
/**
 * 
 * @param {String} vowel -vowel only.
 * @returns {boolean} true or false. 
 */
function isVowel(vowel) {
    if (vowel === "a" || vowel === "e" || vowel === "i" || vowel === "o" || vowel === "u") {
        return true;
    }
    else {
        return false;
    }
}
describe("isVowel", function () {
    it("a is vowel", function () {
        assert.equal(isVowel("a"), true);
    });
    it("e is vowel", function () {
        assert.equal(isVowel("e"), true);
    });
    it("i is vowel", function () {
        assert.equal(isVowel("i"), true);
    });
    it("o is vowel", function () {
        assert.equal(isVowel("o"), true);
    });
    it("u is vowel", function () {
        assert.equal(isVowel("u"), true);
    });
    it("z is not vowel", function () {
        assert.equal(isVowel("z"), false);
    });
    it("5 is not vowel", function () {
        assert.equal(isVowel("5"), false);
    });
});

