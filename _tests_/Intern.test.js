const intern = require('../lib/intern.js');

test('A test for creating a new intern instance', () => {
    const newIntern = new intern('Test', 1, 'test@email.com');
    expect(typeof(newIntern)).toBe("object");
})

// TEST PROPERTIES

test('A test for setting email for new intern', () => {
    const newEngineer = new Intern('Test', 1, 'test@email.com');
    expect(newIntern.email).toBe('test@email.com');
})

// TEST methods

test('A test for getting name for new Employee', () => {
    const newIntern = new Intern('Test', 1, 'test@email.com');
    expect(newEmployee.getName()).toBe('Test');
})

test('A test for getting id for new Intern', () => {
    const newIntern = new Intern('Test', 1, 'test@email.com');
    expect(newEngineer.getId()).toBe(1);
})

test('A test for getting email for new Employee', () => {
    const newEngineer = new Intern('Test', 1, 'test@email.com');
    expect(newIntern.getEmail()).toBe('test@email.com');
})

