const Employee = require('../lib/Employee');
const Manager = require('../lib/Manager');

describe('Manager',() => {
    it('sets employee, id, name and officeNum when an instance is created',() => {
        const name = "sri";
        const id = 12;
        const email = "sri@gmail.com";
        const officeNum = 1;
        const e = new Manager(name,id,email,officeNum);
        expect(e.name).toBe(name);
        expect(e.id).toBe(id);
        expect(e.email).toBe(email);
        expect(e.officeNum).toBe(officeNum);
    })
    it('returns the officeNum of Manager when getOfficeNum() is called',()=> {
        const officeNum = 11;
        const e = new Manager("sri",12,"sri@gmail.com",officeNum);
        expect(e.getOfficeNum()).toBe(officeNum);
    })
    it('returns the Role when getRole() is called',()=> {
        const e = new Manager("sri",12,"sri@gmail.com",11);
        expect(e.getRole()).toBe('Manager');
    })
})