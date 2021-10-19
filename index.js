// dependencies
const inquirer = require("inquirer");
const fs = require("fs");
const htmlTemplate = require('./src/page-template.js')

const Employee = require('./lib/employee');
// empty array
const teamMembers = [];
 
// classes
const managers = require('./lib/manager');
const engineers = require('./lib/engineer');
const interns = require('./lib/intern');




// function addEmployee

function initApp() {
    inquirer.prompt([{
        type: "input",
        message: "Enter team member's name",
        name: "name",
    },
    {
        type: "list",
        message: "Choose team member's role",
        choices: ['Manager', 'Intern', 'Engineer'],
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
                case 'Manager':
                    var roleInfo = 'Office phone number';
                    break;
                case 'Engineer': {
                   var roleInfo = 'Github username';
                    break;
                }
                case 'Intern': {
                    var roleInfo = 'School name';
                    break;
                }   
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
                    case 'Manager': {
                        newMember = new managers(name,id,email,roleInfo);
                        teamMembers.push(newMember);
                        break;
                    }
                    case 'Engineer': {
                        console.log(roleInfo)
                        newMember = new engineers(name,id,email,roleInfo)
                        teamMembers.push(newMember)
                        
                        break;
                    }
                    
                    case 'Intern': {
                        newMember = new interns(name,id,email,roleInfo);
                        teamMembers.push(newMember);
                        break;
                    }
                    
                }
                    switch(moreMembers) {
                        case 'Yes':{
                            initApp();
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
//   const arrays = {
//       engineers: engineerArray.join(),
//       interns: internArray.join(),
//       managers: managerArray.join(),
//   }

//   const markup = generateEP.htmlMarkup(teamMembers)

    console.log(teamMembers)

    const generatedHTML = htmlTemplate(teamMembers);

    // console.log(generatedHTML)

   writeUpHtml(generatedHTML)
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