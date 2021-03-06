const memberTemplate = (member) => {
    let roleInfo = ''

    if(member.getRole() == 'Manager') {
        roleInfo = `Office Number: ${member.officeNumber}`
    } else if(member.getRole() == 'Engineer') {
        roleInfo = `Github: ${member.github}`
    } if(member.getRole() == 'Intern') {
        roleInfo = `School: ${member.school}`
    } 

    return `
<div class="card" style="width: 18rem;">
    <div class="align-items-center">
         <section class="row justify-content-around bg-danger">
             <h5 class="card-title">${member.getName()}</h5>
             <p class="card-text">${member.getRole()}</p>
         </section>
    </div>
         <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${member.getId()}</li>
            <li class="list-group-item">Email: ${member.getEmail()}</li>
            <li class="list-group-item">${roleInfo}</li>
        </ul>
 </div>
`
  
}

const htmlTemplate = (teamMembers) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    </head>


    <body>
    <header class="jumbotron jumbotron-fluid bg-primary text-light">
            <h1 class="text-center">Team's Profile Generated</h1>

    </header>

        <section class="d-flex justify-content-around">
            ${teamMembers.map((member) => {
                return memberTemplate(member);
            })}
        </section>
    </body>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js" integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13" crossorigin="anonymous"></script>

    </html>`
}

module.exports = htmlTemplate;
