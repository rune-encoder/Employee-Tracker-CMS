const inquirer = require("inquirer");

const fs = require("fs");
require("console.table");

const Queries = require("./lib/queries.js");
const questions = require("./lib/questions.js");

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
  } else {
    console.log("nope");
  }
}

async function init() {
  // Create .json file that will contain our department list.
  // This will be used to render the list during inquirer questions.
  let addDept = new Queries.AddRole();
  const departmentList = await addDept.departmentList();
  let deptData = JSON.stringify(departmentList);
  fs.writeFileSync("./lib/lists/departmentList.json", deptData);

  let addRole = new Queries.AddEmployee();
  const roleList = await addRole.roleList();
  let roleData = JSON.stringify(roleList);
  fs.writeFileSync("./lib/lists/roleList.json", roleData);
  
  const managerList = await addRole.managerList()
  await managerList.push({"value":null,"name":"None"});
  let managerData = JSON.stringify(managerList);
  fs.writeFileSync("./lib/lists/managerList.json", managerData);

  menu();
}

init();
