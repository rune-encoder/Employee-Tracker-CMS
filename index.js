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
    menu();
  } else if (funcName === "AddDepartment") {
    let subPrompt = await inquirer.prompt(questions.addDepartment);
    let response = await new Queries[funcName](subPrompt.name);
    await response.connect();
    console.log(`\nSuccessfully added ${subPrompt.name} to the database.\n`);
    menu();
  } else if (funcName === "AddRole") {
    let subPrompt = await inquirer.prompt(questions.addRole);
    let response = await new Queries[funcName](
      subPrompt.title,
      subPrompt.salary,
      subPrompt.name
    );
    console.log(response);
    await response.connect();
    console.log(`\nSuccessfully added to the database.\n`);
    menu();
  } else {
    console.log("nope");
  }
}

async function init() {
  // Create .json file that will contain our department list.
  // This will be used to render the list during inquirer questions.
  let addRole = new Queries.AddRole();
  const departmentList = await addRole.departmentList();
  let data = JSON.stringify(departmentList)
  fs.writeFileSync("./db/departmentList.json", data);


  menu();
}

init();
