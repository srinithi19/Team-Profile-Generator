const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');

describe('Engineer',() => {
    it('sets employee, id, name and github when an instance is created',() => {
        const name = "sri";
        const id = 12;
        const email = "sri@gmail.com";
        const github = "srinithi19";
        const e = new Engineer(name,id,email,github);
        expect(e.name).toBe(name);
        expect(e.id).toBe(id);
        expect(e.email).toBe(email);
        expect(e.github).toBe(github);
    })
    it('returns the GitHub URL of Engineer when getGithub() is called',()=> {
        const github = "srinithi19";
        const e = new Engineer("sri",12,"sri@gmail.com",github);
        expect(e.getGithub()).toBe(github);
    })
    it('returns the Role when getRole() is called',()=> {
        const e = new Engineer("sri",12,"sri@gmail.com","srinithi19");
        expect(e.getRole()).toBe('Engineer');
    })
})