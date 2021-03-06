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

test('Should be under 1600', () => {
  const load1 = 800;
  const load2 = 700;
  expect(load1 + load2).toBeLessThan(1600);
});

test('Should be less than or equal to 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test('Should be greater than 1600', () => {
  const load1 = 800;
  const load2 = 1000;
  expect(load1 + load2).toBeGreaterThan(1600);
});

test('Should be greater than or equal to 1600', () => {
  const load1 = 800;
  const load2 = 800;
  expect(load1 + load2).toBeGreaterThanOrEqual(1600);
});

//Regex
test('There is no I in team', () => {
  expect('team').not.toMatch(/I/);
});

//Arrays 
test('Admin should be in usernames', () => {
  userNames = ['John', 'Karen', 'Admin'];
  expect(userNames).toContain('Admin');
});
// Working with async data
test('User fetched name should be Leanne Graham', () => {
  expect.assertions(1);
  return functions.fetchUser()
    .then(data => {
      expect(data.name).toEqual('Leanne Graham');
    });
});

test('User fetched name should be Leanne Graham', async() => {
  expect.assertions(1);
  const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});
