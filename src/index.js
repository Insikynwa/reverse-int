module.exports = function reverse(n) {
    let newNumber = 0;
    newNumber = Math.abs(n).toString().split("").reverse().join("");
    return Number(newNumber);
};
