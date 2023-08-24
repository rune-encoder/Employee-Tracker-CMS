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
  updateManager: [
    {
      type: "list",
      name: "employee",
      message: "Which employee's manager do you want to update?",
      choices: [],
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the new manager of the employee?",
      choices: [],
    },
  ],
  updateManager: [
    {
      type: "list",
      name: "employee",
      message: "Which employee's manager do you want to update?",
      choices: [],
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the new manager of the employee?",
      choices: [],
    },
  ],
  viewDepartment: [
    {
      type: "list",
      name: "name",
      message: "Select a department to view employees in that department.",
      choices: [],
    },
  ],
  removeDepartment: [
    {
      type: "list",
      name: "department",
      message: "Which department would you like to remove?",
      choices: [],
    },
  ],
  removeRole: [
    {
      type: "list",
      name: "role",
      message: "Which role would you like to remove?",
      choices: [],
    },
  ],
  removeEmployee: [
    {
      type: "list",
      name: "employee",
      message: "Which employee would you like to remove?",
      choices: [],
    },
  ],
};

module.exports = questions;
