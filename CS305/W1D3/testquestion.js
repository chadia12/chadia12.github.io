"use strict";
module.exports = {isVowel};
console.log(isVowel("a"));
console.log(isVowel("e"));
console.log(isVowel("i"));
console.log(isVowel("o"));
console.log(isVowel("u"));
console.log(isVowel("z"));
console.log(isVowel("5"));
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