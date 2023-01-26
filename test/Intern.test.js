const Employee = require('../lib/Employee');
const Intern = require('../lib/Intern');

describe('Intern',() => {
    it('sets employee, id, name and school when an instance is created',() => {
        const name = "sri";
        const id = 12;
        const email = "sri@gmail.com";
        const school = "parkmont";
        const e = new Intern(name,id,email,school);
        expect(e.name).toBe(name);
        expect(e.id).toBe(id);
        expect(e.email).toBe(email);
        expect(e.school).toBe(school);
    })
    it('returns the school name  of Intern when getSchool() is called',()=> {
        const school = "parkmont";
        const e = new Intern("sri",12,"sri@gmail.com",school);
        expect(e.getSchool()).toBe(school);
    })
    it('returns the Role when getRole() is called',()=> {
        const e = new Intern("sri",12,"sri@gmail.com","parkmont");
        expect(e.getRole()).toBe('Intern');
    })
})