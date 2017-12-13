const assert = require('chai').assert;
const myMath = require('../../../../src/common/util/math/myPower');

const testSquare = 6;
const testSquareExp = 2;
const testSquareCorrect = 36;
const testSquareString = "7";
const testSquareStringCorrect = 49;
const testCube = 2;
const testCubeExp = 3;
const testCubeCorrect = 8;
const testCubeString = "3";
const testCubeStringCorrect = 27;

describe('myMath', function() {
    describe('myPower', function() {
        it('myPower(' + testSquare + ', ' + testSquareExp + ') should return the squared version of the number ' + testSquare + '', function() {
            let result = myMath.myPower(testSquare, testSquareExp);
            assert.equal(result, testSquareCorrect);
        });

        it('myPower("' + testSquareString + '", ' + testSquareExp + ') should convert the string version of a number to the number type. It will then return the squared version of the string "' + testSquareString + '"', function() {
            let result = myMath.myPower(testSquareString, testSquareExp);
            assert.equal(result, testSquareStringCorrect);
        });

        it('myPower should return the type number', function() {
            let result = myMath.myPower(testSquare, testSquareExp);
            assert.typeOf(result, 'number');
        });

        it('myPower(' + testCube + ',' + testCubeExp + ') should return the cubed version of the number ' + testCube + '', function() {
            let result = myMath.myPower(testCube, testCubeExp);
            assert.equal(result, testCubeCorrect);
        });

        it('myPower("' + testCubeString + '", ' + testCubeExp + ') should convert the string version of a number to the number type. It will then return the cubed version of the string "' + testCubeString + '"', function() {
            let result = myMath.myPower(testCubeString, testCubeExp);
            assert.equal(result, testCubeStringCorrect);
        });

        it('myPower should return the type number', function() {
            let result = myMath.myPower(testCube, testCubeExp);
            assert.typeOf(result, 'number');
        });
    });
});