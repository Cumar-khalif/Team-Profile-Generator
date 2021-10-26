const Engineer = require('../lib/engineer.js');

test('A test for creating a new Employee instance', () => {
    const newEmployee = new Employee('Test', 1, 'test@email.com');
    expect(typeof(newEmployee)).toBe("object");
})

// TEST PROPERTIES

test('A test for setting name for new Employee', () => {
    const newEmployee = new Employee('Test', 1, 'test@email.com');
    expect(newEmployee.name).toBe("Test");
})

test('A test for setting id for new Employee', () => {
    const newEmployee = new Employee('Test', 1, 'test@email.com');
    expect(newEmployee.id).toBe(1);
})

test('A test for setting email for new Employee', () => {
    const newEmployee = new Employee('Test', 1, 'test@email.com');
    expect(newEmployee.email).toBe('test@email.com');
})

// TEST methods

test('A test for getting name for new Employee', () => {
    const newEmployee = new Employee('Test', 1, 'test@email.com');
    expect(newEmployee.getName()).toBe('Test');
})

test('A test for getting id for new Employee', () => {
    const newEmployee = new Employee('Test', 1, 'test@email.com');
    expect(newEmployee.getId()).toBe(1);
})

test('A test for getting email for new Employee', () => {
    const newEmployee = new Employee('Test', 1, 'test@email.com');
    expect(newEmployee.getEmail()).toBe('test@email.com');
})

test('A test for getting role for new Employee', () => {
    const newEmployee = new Employee('Test', 1, 'test@email.com');
    expect(newEmployee.getRole()).toBe("Employee");
})