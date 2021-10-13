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

//* Manager questions > option to add new employee
const managerQuestions = [
    
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
  },
  {
    type: 'list',
    message: 'Would you like to add another Employee? Choose Manager, Engineer, Intern, or None to finish.',
    name: 'newEmployee',
    options: [ 'Manager', 'Engineer', 'Intern', 'None']
  }
]
  //* Engineer questions > option to add new employee
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
      },
      {
        type: 'list',
        message: 'Would you like to add another Employee? Choose Manager, Engineer, Intern, or None to finish.',
        name: 'newEmployee',
        options: [ 'Manager', 'Engineer', 'Intern', 'None']
      }
    ]
      //* Intern questions > option to add new employee
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
      {
        type: 'list',
        message: 'Would you like to add another Employee? Choose Manager, Engineer, Intern, or None to finish.',
        name: 'newEmployee',
        options: [ 'Manager', 'Engineer', 'Intern', 'None']
      }
]


//* writeToFile > if there is error, console log error > if no error, generate file

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    err ? console.error(err) : console.log('Generating Employee Data....')
  })
};

//* Initialize - Manager questions prompt questions > .then answers > variable for new manager (answers   ) > push new manager data > if else through employee types for add new option.

function init() {
  inquirer
    .prompt(managerQuestions)
    .then((answers) => {
    let newManager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.mangerOfficeNum)
    rosterData.managerData.push(newManager)
    if (answers.newEmployee == 'Manager') {
       init()
    } else if(answers.newEmployee == 'Engineer') {
       engineerQuestions()
    } else if(answers.newEmployee == 'Intern') {
      internQuestions()
    } else{
      writeToFile()
    }
    })
};

init();

//* function for engineer questions prompt questions > .then answers > variable for new engineer (answers   ) > push new engineer data > if else through employee types for add new option.

function engineerQuestions() {
  inquirer
    .prompt(engineerQuestions)
    .then((answers) => {
      let newEngineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub)
      rosterData.engineerData.push(newEngineer)
      if (answers.newEmployee == 'Manager') {
        init()
     } else if(answers.newEmployee == 'Engineer') {
        engineerQuestions()
     } else if(answers.newEmployee == 'Intern') {
       internQuestions()
     } else{ 
       writeToFile()
     }
    })
}


//* function for intern questions - prompt questions > .then answers > variable for new intern (answers   ) > push new intern data > if else through employee types for add new option.

function internQuestions() {
  inquirer
    .prompt(internQuestions)
    .then((answers) => {
      let newIntern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool)
      rosterData.internData.push(newIntern)
      if (answers.newEmployee == 'Manager') {
        init()
     } else if(answers.newEmployee == 'Engineer') {
        engineerQuestions()
     } else if(answers.newEmployee == 'Intern') {
       internQuestions()
     } else{
       writeToFile()
     }
    })
}