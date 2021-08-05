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

test('Should be falsy', () => {
  expect(functions.checkValue(null, undefined)).toBeFalsy();
});

test('Should be truthy', () => {
  expect(functions.checkValue(true)).toBeTruthy();
});
// toBe is for primative types
//toStrictEqual
test('User should be object', () => {
  expect(functions.createUser()).toEqual({ 
    firstName: 'Brad', 
    lastName: 'Traversy' 
  });
});


