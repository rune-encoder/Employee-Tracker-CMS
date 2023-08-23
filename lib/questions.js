const fs = require("fs");

const departmentList = [];

fs.readFile("./db/departmentList.json", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  let list = JSON.parse(data);
  for (let i = 0; i < list.length; i++) {
    departmentList.push(list[i]);
  }
  // console.log(departmentList);
  return;
});

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
};

module.exports = questions;
