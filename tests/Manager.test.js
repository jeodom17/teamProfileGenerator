const Manager  = require('../lib/Manager');

describe('Manager', () => {
    describe('Initialization', () => {
        it('should create new object with: name, id, email, officeNum properties', () => {
            const name = 'Rooster';
            const id = 17;
            const email = 'rooster@mail.com';
            const officeNum = 1776;
            const newEmployee = new Manager(name, id, email, officeNum);
 
            expect(newEmployee.name).toEqual(name);
            expect(newEmployee.id).toEqual(id);
            expect(newEmployee.email).toEqual(email);
            expect(newEmployee.officeNum).toEqual(officeNum);
        });
    });
 
    
 
     describe('getRole', () => {
         it('should return employee Role when employee.getRole()', () => {
             const name = 'Rooster';
             const id = 17;
             const email = 'rooster@mail.com';
             const officeNum = 1776;
             const newEmployee = new Manager(name, id, email, officeNum);
 
             expect(newEmployee.getRole()).toEqual('Manager');
         });
 });

    describe('officeNum', () => {
        it('should return employee officeNum when employee.officeNum()', () => {
            const name = 'Rooster';
            const id = 17;
            const email = 'rooster@mail.com';
            const officeNum = 1776;
            const newEmployee = new Manager(name, id, email, officeNum);

            expect(newEmployee.getOfficeNum()).toEqual(officeNum);
        });
    });
 
 });