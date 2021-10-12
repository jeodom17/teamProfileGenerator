const inquirer = require('inquirer');
const fs = require('fs');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');


const rosterData = {
    internData: [],
    managerData: [],
    engineerData: [],
};

const questionData = [
    //* Manager questions
  {
    type: 'input',
    message: 'What is the Managers name?',
    name: managerName,
  },
  {
    type: 'input',
    message: 'What is the Managers Id?',
    name: 'managerId',
  },
  {
    type: 'input',
    message: 'What is the Managers email?',
    name: 'managerEmail',
  },
  {
    type: 'input',
    message: 'What is the Managers Office Number?',
    name: 'managerOfficeNum',
  },
     //* Engineer questions
     {
        type: 'input',
        message: 'What is the Managers name?',
        name: managerName,
      },
      {
        type: 'input',
        message: 'What is the Managers Id?',
        name: 'managerId',
      },
      {
        type: 'input',
        message: 'What is the Managers email?',
        name: 'managerEmail',
      },
      {
        type: 'input',
        message: 'What is the Managers Office Number?',
        name: 'managerOfficeNum',
      },
    

]