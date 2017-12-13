module.exports = {
    toSquare: function(num) {
        var squared;
        if (typeof num === "number") {
            squared = num * num;
        } else if (typeof num === "string") {
            squared = parseInt(num);
            squared = squared * squared;
        }
        return squared;
    }
}