module.exports = {
    toCube: function(num) {
        var cubed;
        if (typeof num === "number") {
            cubed = (num * num * num);
        } else if (typeof num === "string") {
            cubed = parseInt(num);
            cubed = (cubed * cubed * cubed);
        }
        return cubed;
    }
}