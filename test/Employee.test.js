const Employee = require('../lib/Employee');

describe('Employee',() => {
    it('sets employee, id and name when an instance is created',() => {
        const name = "sri";
        const id = 12;
        const email = "sri@gmail.com";
        const e = new Employee(name,id,email);
        expect(e.name).toBe(name);
        expect(e.id).toBe(id);
        expect(e.email).toBe(email);
    })
    it('returns the Name when getName() is called',()=> {
        const name = "sri";
        const e = new Employee(name,12,"sri@gmail.com");
        expect(e.getName()).toBe(name);
    })
    it('returns the ID when getId() is called',()=> {
        const id = "12";
        const e = new Employee("sri",id,"sri@gmail.com");
        expect(e.getId()).toBe(id);
    })
    it('returns the EmailID when getEmail() is called',()=> {
        const email = "sri@gmail.com";
        const e = new Employee("sri",12,email);
        expect(e.getEmail()).toBe(email);
    })
    it('returns the Role when getRole() is called',()=> {
        const e = new Employee("sri",12,"sri@gmail.com");
        expect(e.getRole()).toBe('Employee');
    })
})