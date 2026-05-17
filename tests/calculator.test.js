const {
    add,
    subtract,
    average
} = require('../src/calculator');

test('adds numbers correctly', () => {
    expect(add(2,3)).toBe(5);
});

test('subtracts numbers correctly', () => {
    expect(subtract(10,4)).toBe(6);
});

test('calculates average correctly', () => {
    expect(average([80,90,100])).toBe(90);
});