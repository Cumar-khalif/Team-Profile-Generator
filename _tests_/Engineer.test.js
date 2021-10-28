const Engineer = require('../lib/engineer.js');

test('A test for creating a new Engineer instance', () => {
    const newEngineer = new Engineer('Test', 1, 'test@email.com');
    expect(typeof(newEngineer)).toBe("object");
})

// TEST PROPERTIES

test('A test for setting email for new Engineer', () => {
    const newEngineer = new Engineer('Test', 1, 'test@email.com');
    expect(newEngineer.email).toBe('test@email.com');
})

// TEST methods

test('A test for getting name for new Employee', () => {
    const newEngineer = new Engineer('Test', 1, 'test@email.com');
    expect(newEmployee.getName()).toBe('Test');
})

test('A test for getting id for new Employee', () => {
    const newEngineer = new Engineer('Test', 1, 'test@email.com');
    expect(newEngineer.getId()).toBe(1);
})

test('A test for getting email for new Employee', () => {
    const newEngineer = new Engineer('Test', 1, 'test@email.com');
    expect(newEngineer.getEmail()).toBe('test@email.com');
})

