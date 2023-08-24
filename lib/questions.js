// Contains all of our questions that will be asked with Inquirer.
const questions = {
  menu: [
    {
      type: "list",
      name: "menu",
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
    },
  ],
  addDepartment: [
    {
      type: "input",
      name: "name",
      message: "What is the name of the department?",
    },
  ],
  addRole: [
    {
      type: "input",
      name: "title",
      message: "What is the name of the role?",
    },
    {
      type: "number",
      name: "salary",
      message: "What is the salary of the role?",
    },
    {
      type: "list",
      name: "name",
      message: "What department does your role belong to?",
      choices: [],
    },
  ],
  addEmployee: [
    {
      type: "input",
      name: "first",
      message: "What is the employee's first name?",
    },
    {
      type: "input",
      name: "last",
      message: "What is the employee's last name?",
    },
    {
      type: "list",
      name: "name",
      message: "What is the employee's role?",
      choices: [],
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the employee's manager?",
      choices: [],
    },
  ],
  updateEmployee: [
    {
      type: "list",
      name: "name",
      message: "Which employee's role do you want to update?",
      choices: [],
    },
    {
      type: "list",
      name: "role",
      message: "Which role do you want to assign the selected employee?",
      choices: [],
    },
  ],
};

module.exports = questions;
