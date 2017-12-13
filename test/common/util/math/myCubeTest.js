const assert = require('chai').assert;
const myCube = require('../../../../src/common/util/math/myCube');

const testCube = 4;
const testCubeCorrect = 64;
const testCubeString = "5";
const testCubeStringCorrect = 125;

describe('myCube', function() {
    describe('toCube', function() {
        it('toCube(' + testCube + ') should return the cubed version of the number ' + testCube + '', function() {
            let result = myCube.toCube(testCube);
            assert.equal(result, testCubeCorrect);
        });

        it('myCube("' + testCubeString + '") should convert the string version of a number to the number type. It will then return the cubed version of the string "' + testCubeString + '"', function() {
            let result = myCube.toCube(testCubeString);
            assert.equal(result, testCubeStringCorrect);
        });
    });
});