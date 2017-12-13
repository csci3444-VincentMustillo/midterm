const mySquare = require('./mySquare.js');
const myCube = require('./myCube.js');

module.exports = {
    myPower: function(num, exp) {
        if (typeof num == "string") {
            var answer = parseInt(num);

            if (exp == 0) {
                return 1;
            } else if (exp == 1) {
                return answer;
            } else if (exp == 2) {
                return mySquare.toSquare(answer);
            } else if (exp == 3) {
                return myCube.toCube(answer);
            } else {
                for (let i = 2; i < exp; i++) {
                    answer *= answer;
                }
                return answer;
            }
        } else {
            if (exp == 0) {
                return 1;
            } else if (exp == 1) {
                return num;
            } else if (exp == 2) {
                return mySquare.toSquare(num);
            } else if (exp == 3) {
                return myCube.toCube(num);
            } else {
                var answer = num;
                for (let i = 2; i < exp; i++) {
                    answer *= answer;
                }
                return answer;
            }
        }
    }
}