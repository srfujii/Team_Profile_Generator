
const renderCard = (teamMember) => {

    console.log("Generating team member card...");
    
    let htmlText = `<!-- Team Card -->
    <div class="col">
        <div class="card h-100 m-3">
            <div class="card-header text-center text-white bg-primary">
                <h5>${teamMember.getName()}</h5>
                <i class="fas fa-coffee"></i>
                <h5>${teamMember.getRole()}</h5>
            </div>
            <div class="card-body bg-light">
                <p class="card-text">
                    <ul class="list-group list-group-flush border">
                        <li class="list-group-item">ID: ${teamMember.getId()}</li>
                        <li class="list-group-item">Email: <a href="mailto:${teamMember.getEmail()}">${teamMember.getEmail()}</a></li>`;
    
                        if (teamMember.getRole() === "Manager") {
                            htmlText += `<li class="list-group-item">Office Number: ${teamMember.getOfficeNum()}</li>`;
                        } else if (teamMember.getRole() === "Engineer") {
                            htmlText += `<li class="list-group-item">GitHub: <a href="http://github.com/${teamMember.getGitHub()}/">${teamMember.getGitHub()}</a></li>`;
                        } else if (teamMember.getRole() === "Intern") {
                            htmlText += `<li class="list-group-item">School: ${teamMember.getSchool()}</li>`;
                        }

    htmlText += ` </ul>
                        </p>
                    </div>
                </div>
            </div>`;

    return htmlText;

}

// Function generateHTML generates and returns the HTML for the team.html file
const generateHTML = (employeeArray) => {

    console.log("Generating HTML...");

    let htmlText = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- BootStrap CSS & Font Awesome -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
        <link href="./assets/css/style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <!-- Heading -->
            <nav  style="height: 100px" class="navbar navbar-dark bg-secondary">
                <div class="container-fluid" style="justify-content: center;"">
                    <span class="navbar-brand mb-0 text-white h1">My Team</span>
                </div>
            </nav>
        </header>
            
        <!-- Main Body Content -->
        <main class="container-fluid vh-100">
            <div class="row row-cols-1 row-cols-md-3 g-4">`;

    htmlText += renderCard(employeeArray[0]);

    for (let i=1; i<employeeArray.length; i++) {
        htmlText += renderCard(employeeArray[i]); 
    }

    htmlText += `</div>
    </main>

    
    <!-- BootStrap JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.24.0/moment.min.js"></script>
</body>
</html>`;

    return htmlText;
}

// Export our generateHTML function for use in index.js
module.exports = generateHTML;