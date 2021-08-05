const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
  expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to Not equal 5', () => {
  expect(functions.add(2, 2)).not.toBe(5);
});

test('Should be Null', () => {
  expect(functions.isNull()).toBeNull();
});