const assert = require('chai').assert;
const mySquare = require('../../../../src/common/util/math/mySquare.js');

const testSquare = 4;
const testSquareCorrect = 16;
const testSquareString = "5";
const testSquareStringCorrect = 25;

describe('mySquare', function() {
    describe('toSquare', function() {
        it('toSquare(' + testSquare + ') should return the squared version of the number ' + testSquare + '', function() {
            let result = mySquare.toSquare(testSquare);
            assert.equal(result, testSquareCorrect);
        });

        it('toSquare("' + testSquareString + '") should convert the string version of a number to the number type. It will then return the squared version of the string "' + testSquareString + '"', function() {
            let result = mySquare.toSquare(testSquareString);
            assert.equal(result, testSquareStringCorrect);
        });
    });
});