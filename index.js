const inquirer = require("inquirer");

const fs = require("fs");
require("console.table");

const Queries = require("./lib/queries.js");
const { questions, departmentList, roleList, employeeList } = require("./lib/questions.js");

console.info(`Program Start`);

async function menu() {
  const prompt = await inquirer.prompt(questions.menu);
  const funcName = await prompt.menu.split(" ").join("");
  if (
    funcName === "ViewAllDepartments" ||
    funcName === "ViewAllRoles" ||
    funcName === "ViewAllEmployees"
  ) {
    let response = await new Queries[funcName]();
    let answer = await response.connect();
    console.table(answer[0]);
    init();
  } else if (funcName === "AddDepartment") {
    let subPrompt = await inquirer.prompt(questions.addDepartment);
    let response = await new Queries[funcName](subPrompt.name);
    await response.connect();
    console.log(`\nSuccessfully added new department: ${subPrompt.name} to the database.\n`);
    init();
  } else if (funcName === "AddRole") {
    let subPrompt = await inquirer.prompt(questions.addRole);
    let response = await new Queries[funcName](
      subPrompt.title,
      subPrompt.salary,
      subPrompt.name
    );
    await response.connect();
    console.log(`\nSuccessfully added new role: ${subPrompt.title} to the database.\n`);
    init();
  } else if (funcName === "AddEmployee") {
    let subPrompt = await inquirer.prompt(questions.addEmployee);
    let response = await new Queries[funcName](
      subPrompt.first,
      subPrompt.last,
      subPrompt.name,
      subPrompt.manager
    );
    await response.connect();
    console.log(`\nSuccessfully added new employee: ${subPrompt.first} ${subPrompt.last} to the database.\n`);
    init();
  } else if (funcName === "UpdateEmployeeRole") {
    let subPrompt = await inquirer.prompt(questions.updateEmployee);
    let response = await new Queries[funcName](
      subPrompt.role,
      subPrompt.name
    );
    await response.connect();
    console.log(`\nSuccessfully update ${employeeList[subPrompt.name - 1].name} role to ${roleList[subPrompt.role - 1].name}. \n`);
    init();
  } else {
    console.log(`\nApplication Closed. \n`);
    process.exit();
  }
}

async function init() {
  // Retrieves and saves latest updated list of departments stored in database.
  // Used to render list of answer choices for our questions.
  let addDept = new Queries.AddRole();
  const departmentList = await addDept.departmentList();
  let deptData = JSON.stringify(departmentList);
  fs.writeFileSync("./lib/lists/departmentList.json", deptData);

  // Retrieves and saves latest updated list of roles stored in database.
  // Used to render list of answer choices for our questions.
  let addRole = new Queries.AddEmployee();
  const roleList = await addRole.roleList();
  let roleData = JSON.stringify(roleList);
  fs.writeFileSync("./lib/lists/roleList.json", roleData);
  
  // Retrieves and saves latest updated list of employees stored in database.
  // Used to render list of answer choices for our questions.
  const employeeList = await addRole.employeeList()
  // await employeeList.push({"value":null,"name":"None"});
  let employeeData = JSON.stringify(employeeList);
  fs.writeFileSync("./lib/lists/employeeList.json", employeeData);

  menu();
}

init();
