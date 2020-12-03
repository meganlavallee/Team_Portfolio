// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
function intern()
{
inquirer
    .prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name?",
        },
        {
            name: "role",
            type: "list",
            message: "What is your role?",
        },
        {
            name: "email",
            type: "input",
            message: "What is your email?",
        },
        {
            name: "id",
            type: "input",
            message: "What is your ID number?",
        },
        {
            name: "school",
            type: "input",
            message: "What school are you going to?",
        },
        // Questions
        // Name, Role, Email, ID, GitHub, School
    ])
    .then((answers => {
        console.log('hello'+ answers.name);
        if(error.isTtyError){
            // Error
        } else {
            // Something else when wrong
        }
    }));
}