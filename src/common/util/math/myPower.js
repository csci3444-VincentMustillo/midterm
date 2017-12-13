const mySquare = require('./mySquare.js');
const myCube = require('./myCube.js');

module.exports = {
    myPower: function(num, exp) {
        if (typeof num === "string") {
            var answer = parseInt(num);

            if (exp == 2) {
                return mySquare.toSquare(answer);
            } else {
                return myCube.toCube(answer);
            }
        } else {
            if (exp == 2) {
                return mySquare.toSquare(num);
            } else {
                return myCube.toCube(num);
            }
        }
    }
}