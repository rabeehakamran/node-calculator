// calculator.test.js

const { add, subtract, multiply, divide } = require('./calculator');

test('adds two numbers correctly', () => {
    expect(add(5, 3)).toBe(8);
});

test('subtracts two numbers correctly', () => {
    expect(subtract(10, 4)).toBe(6);
});

test('multiplies two numbers correctly', () => {
    expect(multiply(3, 7)).toBe(21);
});

test('divides two numbers correctly', () => {
    expect(divide(20, 5)).toBe(4);
});

test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
});
