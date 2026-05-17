function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function average(scores) {
    const total = scores.reduce((sum, score) => sum + score, 0);

    return total / scores.length;
}

module.exports = {
    add,
    subtract,
    average
};