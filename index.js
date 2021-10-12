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

const managerQuestions = [
    //* Manager questions
  {
    type: 'input',
    message: 'What is the Managers name?',
    name: 'managerName',
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
  }
]
  //* Engineer questions
  const engineerQuestions = [
     {
        type: 'input',
        message: 'What is the Engineers name?',
        name: 'engineerName',
      },
      {
        type: 'input',
        message: 'What is the Engineer Id?',
        name: 'engineerId',
      },
      {
        type: 'input',
        message: 'What is the Engineer email?',
        name: 'engineerEmail',
      },
      {
        type: 'input',
        message: 'What is the Engineers github username?',
        name: 'engineerGithub',
      }
    ]
      //* Intern questions\
  const internQuestions = [
     {
        type: 'input',
        message: 'What is the Interns name?',
        name: 'internName',
      },
      {
        type: 'input',
        message: 'What is the Intern Id?',
        name: 'internId',
      },
      {
        type: 'input',
        message: 'What is the intern email?',
        name: 'internEmail',
      },
      {
        type: 'input',
        message: 'What is the name of the interns School?',
        name: 'internSchool',
      },
]