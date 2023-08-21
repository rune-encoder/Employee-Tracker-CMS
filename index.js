const inquirer = require("inquirer");
const choice = require('./lib/chosenResponse.js');

console.info(`Program Start`);

inquirer
  .prompt({
    name: "menu",
    type: "list",
    message: "What would you like to do",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
      "Exit",
    ],
  })
  .then(
    (response) =>
      response.menu.charAt(0).toLowerCase() +
      response.menu.slice(1).split(" ").join("")
  )
  .then((response) => choice(response));
