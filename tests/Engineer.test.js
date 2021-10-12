const Engineer  = require('../lib/Engineer');

describe('Engineer', () => {
    describe('Initialization', () => {
        it('should create new object with: name, id, email, github properties', () => {
            const name = 'Rooster';
            const id = 17;
            const email = 'rooster@mail.com';
            const github = 'rooster17'
            const newEmployee = new Engineer(name, id, email, github);
 
            expect(newEmployee.name).toEqual(name);
            expect(newEmployee.id).toEqual(id);
            expect(newEmployee.email).toEqual(email);
            expect(newEmployee.github).toEqual(github);
        });
    });
 
    
 
     describe('getRole', () => {
         it('should return employee Role when employee.getRole()', () => {
             const name = 'Rooster';
             const id = 17;
             const email = 'rooster@mail.com';
             const github = 'rooster17'
             const newEmployee = new Engineer(name, id, email, github);
 
             expect(newEmployee.getRole()).toEqual('Engineer');
         });
 });

    describe('github', () => {
        it('should return employee github when employee.github()', () => {
            const name = 'Rooster';
            const id = 17;
            const email = 'rooster@mail.com';
            const github = 'rooster17'
            const newEmployee = new Engineer(name, id, email, github);

            expect(newEmployee.getGithub()).toEqual(github);
        });
    });
 
 });