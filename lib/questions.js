const fs = require("fs");

const departmentList = [];
const roleList = [];
const employeeList = [];

// Reads updated departmentList.json file to update list of department choices in our questions. 
fs.readFile("./lib/lists/departmentList.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let list = JSON.parse(data);
  for (let i = 0; i < list.length; i++) {
    departmentList.push(list[i]);
  }
  return;
});

// Read updated roleList.json file to update list of role choices in our questions. 
fs.readFile("./lib/lists/roleList.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let list = JSON.parse(data);
  for (let i = 0; i < list.length; i++) {
    roleList.push(list[i]);
  }
  return;
});

// Reads updated employeeList.json file to update list of employee choices in our questions. 
fs.readFile("./lib/lists/employeeList.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let list = JSON.parse(data);
  for (let i = 0; i < list.length; i++) {
    employeeList.push(list[i]);
  }
  return;
});

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
      choices: departmentList,
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
      choices: roleList,
    },
    {
      type: "list",
      name: "manager",
      message: "Who is the employee's manager?",
      choices: employeeList,
    },
  ],
  updateEmployee: [
    {
      type: "list",
      name: "name",
      message: "Which employee's role do you want to update?",
      choices: employeeList,
    },
    {
      type: "list",
      name: "role",
      message: "Which role do you want to assign the selected employee?",
      choices: roleList,
    },
  ],
};

module.exports = { questions, departmentList, roleList, employeeList };
