const Intern  = require('../lib/Intern');

describe('Intern', () => {
    describe('Initialization', () => {
        it('should create new object with: name, id, email, school properties', () => {
            const name = 'Rooster';
            const id = 17;
            const email = 'rooster@mail.com';
            const school = 'Ole Miss';
            const newEmployee = new Intern(name, id, email, school);
 
            expect(newEmployee.name).toEqual(name);
            expect(newEmployee.id).toEqual(id);
            expect(newEmployee.email).toEqual(email);
            expect(newEmployee.school).toEqual(school);
        });
    });
 
    
 
     describe('getRole', () => {
         it('should return employee Role when employee.getRole()', () => {
             const name = 'Rooster';
             const id = 17;
             const email = 'rooster@mail.com';
             const school = 'Ole Miss';
             const newEmployee = new Intern(name, id, email, school);
 
             expect(newEmployee.getRole()).toEqual('Intern');
         });
 });

    describe('school', () => {
        it('should return employee school when employee.school()', () => {
            const name = 'Rooster';
            const id = 17;
            const email = 'rooster@mail.com';
            const school = 'Ole Miss';
            const newEmployee = new Intern(name, id, email, school);

            expect(newEmployee.getSchool()).toEqual(school);
        });
    });
 
 });