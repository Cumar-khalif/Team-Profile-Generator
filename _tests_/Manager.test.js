const Manager = require('../lib/manager.js');

test('A test for creating a new Manager instance', () => {
    const newManager = new Manager('Test', 1, 'test@email.com');
    expect(typeof(newManager)).toBe("object");
})

// TEST PROPERTIES

test('A test for setting email for new Manager', () => {
    const newManager = new Manager('Test', 1, 'test@email.com');
    expect(newManager.email).toBe('test@email.com');
})

// TEST methods

test('A test for getting name for new Employee', () => {
    const newManager = new Manager('Test', 1, 'test@email.com');
    expect(newEmployee.getName()).toBe('Test');
})

test('A test for getting id for new Employee', () => {
    const newManager = new Manager('Test', 1, 'test@email.com');
    expect(newManager.getId()).toBe(1);
})

test('A test for getting email for new Employee', () => {
    const newManager = new Manager('Test', 1, 'test@email.com');
    expect(newManager.getEmail()).toBe('test@email.com');
})

