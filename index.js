const inquirer = require('inquirer');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');

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
    let valid = "";
    if (valid) {
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

  
