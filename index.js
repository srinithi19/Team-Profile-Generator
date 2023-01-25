const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const { createEmployeeCard } = require('./lib/renderHtml');


//declare team object to store employees
const team = {
    name: '',
    employees: [],
};

//user input validation
const stringValidator = (input) => {
    if (!input) {
        return 'Your input should include atleast one character.';
    }
    return true;
};

const numberValidator = (input) => {
    if (isNaN(input)) {
        return 'Your input should be a number.';
    }
    return true;
};

const emailValidator = (input) => {
    let validEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input);
    if (validEmail) {
        return true;
    }
    return 'Please enter a valid email.';
};

//create user questions
const questions = [
    {
        type: 'input',
        name: 'teamName',
        message: 'What is the name of your team?',
        validate: stringValidator,
    },
    {
        type: 'input',
        name: 'name',
        message: 'Who is the manager of your team',
        validate: stringValidator,
    },
    {
        type: 'number',
        name: 'id',
        message: (answers) => ` What is ${answers.name}'s employee ID`,
        validate: numberValidator,
    },
    {
        type: 'input',
        name: 'email',
        message: (answers) => ` What is ${answers.name}'s email`,
        validate: emailValidator,
    },
    {
        type: 'input',
        name: 'officeNum',
        message: (answers) => ` What is ${answers.name}'s office number`,
        validate: stringValidator,
    },
];

const questionsTwo = [
    {
        type: 'list',
        name: 'teamMember',
        choices: ['Engineer', 'Intern'],
        message: 'Who would you like to add?',
    },
    {
        type: 'input',
        name: 'name',
        message: (answers) =>
        `What is the name of the ${answers.teamMember} you would like to add?`,
        validate: stringValidator,
    },
    {
        type: 'number',
        name: 'id',
        message: (answers) => ` What is ${answers.name}'s employee ID?`,
        validate: numberValidator,
    },
    {
        type: 'input',
        name: 'email',
        message: (answers) => ` What is ${answers.name}'s email?`,
        validate: emailValidator,
    },
    {
        type: 'input',
        name: 'github',
        message: (answers) => ` What is ${answers.name}'s github?`,
        when: (answers) => answers.teamMember === 'Engineer',
        validate: stringValidator,
    },
    {
        type: 'input',
        name: 'school',
        message: (answers) => ` What is ${answers.name}'s school's name?`,
        when: (answers) => answers.teamMember === 'Intern',
        validate: stringValidator,
    },
];

//function to prompt user to add team members 
function addToTeam() {
    const qn = [
        {
            type : 'confirm',
            name : 'addPerson',
            message : "would you like to add another Team Member? "
        }
    ]
    inquirer
    .prompt(qn)
    .then((answer) => {
        if(answer.addPerson) {
            addEmployee();
        } else {
            createEmployeeCard(team);
        }
        
    })
}

//function to prompt users to add team members info
function addEmployee() {
    try {
        inquirer
        .prompt(questionsTwo)
        .then((answers)=> {
            createTeamMember(answers);
            addToTeam();
        })
    } catch (err) {
        console.log(err);
    }
}

//function to create team members using constructor classes
function createTeamMember(employee) {
    let employeeInfo;
    const { teamMember, name, id, email, school, github } = employee;
    if (teamMember === 'Engineer') {
        employeeInfo = new Engineer(name, id, email, github);
    } else {
        employeeInfo = new Intern(name, id, email, school);
    }
    team.employees.push(employeeInfo);
}


//function to get user response by using inquirer to prompt questions
function init() {
    try {
        inquirer
        .prompt(questions)
        .then((answers) => {
            const { teamName, name, id, email, officeNum } = answers;
            team.name = teamName;
            team.employees.push(new Manager(name, id, email, officeNum));
            addToTeam();
        });
    } catch (err) {
        console.log(err);
    }
}


init();


