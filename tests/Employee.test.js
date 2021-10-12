
const Employee = require('../lib/Employee');

describe('Employee', () => {
   describe('Initialization', () => {
       it('should create new object with: name, id, email properties', () => {
           const name = 'Rooster';
           const id = 17;
           const email = 'rooster@mail.com';
           const newEmployee = new Employee(name, id, email);

           expect(newEmployee.name).toEqual(name);
           expect(newEmployee.id).toEqual(id);
           expect(newEmployee.email).toEqual(email);
       });
   });

   describe('getName', () => {
    it('should return employee name when employee.getName()', () => {
        const name = 'Rooster';
        const id = 17;
        const email = 'rooster@mail.com';
        const newEmployee = new Employee(name, id, email);

        expect(newEmployee.getName()).toEqual(name);
    });
});

    describe('getId', () => {
        it('should return employee id when employee.getId()', () => {
            const name = 'Rooster';
            const id = 17;
            const email = 'rooster@mail.com';
            const newEmployee = new Employee(name, id, email);

            expect(newEmployee.getId()).toEqual(id);
    });
});

    describe('getEmail', () => {
        it('should return employee email when employee.getEmail()', () => {
            const name = 'Rooster';
            const id = 17;
            const email = 'rooster@mail.com';
            const newEmployee = new Employee(name, id, email);

            expect(newEmployee.getEmail()).toEqual(email);
    });
});

    describe('getRole', () => {
        it('should return employee Role when employee.getRole()', () => {
            const name = 'Rooster';
            const id = 17;
            const email = 'rooster@mail.com';
            const newEmployee = new Employee(name, id, email);

            expect(newEmployee.getRole()).toEqual('Employee');
        });
});

});