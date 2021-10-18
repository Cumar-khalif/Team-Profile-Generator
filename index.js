// dependencies
const inquirer = require("inquirer");
const fs = require("fs");


const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer')
// empty array
const teamMembers = [];
 
// generate
const engineers = require('./lib/engineer');
const interns = require('./lib/intern');
const managers = require('./lib/manager');



// function addEmployee

function initApp() {
    inquirer.prompt([{
        type: "input",
        message: "Enter team member's name",
        name: "name",
    },
    {
        type: "list",
        message: "Select team member's role",
        choices: ["Engineer", 'Intern', 'Manager'],
        name: 'role'
    },
    {
        type: "input",
        message: "Enter team memeber's id",
        name: "id",
    },
    {
        type: "input",
        message: "Enter team memeber's email",
        name: "email",
    }
    ]).then(({ name, role, id, email }) => {
            const info = role;
            switch (info) {
                case 'Engineer': {
                   var roleInfo = 'Github username';1
                    break;
                }
                case 'Intern': {
                    var roleInfo = 'School name';
                    break;
                }
                case 'Manager':
                    var roleInfo = 'Office phone number';
                    break;
                
            }
            inquirer.prompt([{
                type: 'input',
                message: `Enter team member's ${roleInfo}`,
                name: 'roleInfo',
            }, {
                type: 'list',
                message: `Would you like to add another memeber?`,
                choices: ['Yes', 'No'],
                name: 'moreMembers',
            }])
            .then(({ roleInfo,moreMembers}) => {
               console.log(roleInfo)
                var newMember;
                switch(role) {
                    case 'Engineer': {
                        console.log(roleInfo)
                        newMember = new Engineer(name,id,email,roleInfo)
                        engineerArray.push(generateEP.generateEngineer(newMember))
                        
                        break;
                    }
                    case 'Intern': {
                        newMember = new Intern(name,id,email,roleInfo);
                        internArray.push(generateEP.generateIntern(newMember));
                        break;
                    }
                    case 'Manager': {
                        newMember = new Manager(name,id,email,roleInfo);
                        managerArray.push(generateEP.generateManager(newMember));
                        break;
                    }
                }
                    switch(moreMembers) {
                        case 'Yes':{
                            addEmployee();
                            break;
                        }
                        case 'No':{
                            finishHtml();
                            break;
                        }
                    }
                
            })
        })

}


function finishHtml() {
  const arrays = {
      engineers: engineerArray.join(),
      interns: internArray.join(),
      managers: managerArray.join(),
  }
  const markup = generateEP.htmlMarkup(arrays)

   writeUpHtml(markup)
}

function writeUpHtml(markup) {
    fs.writeFile("./dist/index.html", markup, (err) => {
        if (err) {
            console.log(err)
        }
        console.log("Your Team is generated!")
    })
};

initApp();