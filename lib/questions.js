// Console color for questions
const color = require('./console-colors');

// Contains all of our questions that will be asked with Inquirer.
const questions = {
  menu: [
    {
      type: "list",
      pageSize: 15,
      name: "menu",
      message: color.magenta("What would you like to do"),
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add Department",
        "Add Role",
        "Add Employee",
        "Update Employee Role",
        "Update Employee Manager",
        "View Employees by Manager",
        "View Employees by Department",
        "Remove Department",
        "Remove Role",
        "Remove Employee",
        "View Total Utilized Budget",
        "Exit",
      ],
    },
  ],
  addDepartment: [
    {
      type: "input",
      name: "name",
      message: color.magenta("What is the name of the department?"),
    },
  ],
  addRole: [
    {
      type: "input",
      name: "title",
      message: color.magenta("What is the name of the role?"),
    },
    {
      type: "number",
      name: "salary",
      message: color.magenta("What is the salary of the role?"),
    },
    {
      type: "list",
      name: "name",
      message: color.magenta("What department does your role belong to?"),
      choices: [],
    },
  ],
  addEmployee: [
    {
      type: "input",
      name: "first",
      message: color.magenta("What is the employee's first name?"),
    },
    {
      type: "input",
      name: "last",
      message: color.magenta("What is the employee's last name?"),
    },
    {
      type: "list",
      name: "name",
      message: color.magenta("What is the employee's role?"),
      choices: [],
    },
    {
      type: "list",
      name: "manager",
      message: color.magenta("Who is the employee's manager?"),
      choices: [],
    },
  ],
  updateEmployee: [
    {
      type: "list",
      name: "name",
      message: color.magenta("Which employee's role do you want to update?"),
      choices: [],
    },
    {
      type: "list",
      name: "role",
      message: color.magenta("Which role do you want to assign the selected employee?"),
      choices: [],
    },
  ],
  updateManager: [
    {
      type: "list",
      name: "employee",
      message: color.magenta("Which employee's manager do you want to update?"),
      choices: [],
    },
    {
      type: "list",
      name: "manager",
      message: color.magenta("Who is the new manager of the employee?"),
      choices: [],
    },
  ],
  updateManager: [
    {
      type: "list",
      name: "employee",
      message: color.magenta("Which employee's manager do you want to update?"),
      choices: [],
    },
    {
      type: "list",
      name: "manager",
      message: color.magenta("Who is the new manager of the employee?"),
      choices: [],
    },
  ],
  viewDepartment: [
    {
      type: "list",
      name: "name",
      message: color.magenta("Select a department to view employees in that department."),
      choices: [],
    },
  ],
  removeDepartment: [
    {
      type: "list",
      name: "department",
      message: color.magenta("Which department would you like to remove?"),
      choices: [],
    },
  ],
  removeRole: [
    {
      type: "list",
      name: "role",
      message: color.magenta("Which role would you like to remove?"),
      choices: [],
    },
  ],
  removeEmployee: [
    {
      type: "list",
      name: "employee",
      message: color.magenta("Which employee would you like to remove?"),
      choices: [],
    },
  ],
};

module.exports = questions;
