const inquirer = require("inquirer");
require("console.table");

const Queries = require("./lib/queries.js");

const { CreateLists } = require("./lib/queries.js");
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
    let answer = await response.result();
    console.table(answer[0]);
    menu();
  } else if (funcName === "AddDepartment") {
    let subPrompt = await inquirer.prompt(questions.addDepartment);
    let response = await new Queries[funcName](subPrompt.name);
    await response.result();
    console.log(
      `\nSuccessfully added new department: ${subPrompt.name} to the database.\n`
    );
    menu();
  } else if (funcName === "AddRole") {
    const newDeptList = await CreateLists.prototype.getDeptList;
    questions.addRole[2].choices = newDeptList;
    let subPrompt = await inquirer.prompt(questions.addRole);
    let response = await new Queries[funcName](
      subPrompt.title,
      subPrompt.salary,
      subPrompt.name
    );
    await response.result();
    console.log(
      `\nSuccessfully added new role: ${subPrompt.title} to the database.\n`
    );
    menu();
  } else if (funcName === "AddEmployee") {
    const newRoleList = await CreateLists.prototype.getRoleList;
    questions.addEmployee[2].choices = newRoleList;

    const newEmployeeList = await CreateLists.prototype.getEmployeeList;
    newEmployeeList.unshift({ value: null, name: "None" });
    questions.addEmployee[3].choices = newEmployeeList;

    let subPrompt = await inquirer.prompt(questions.addEmployee);
    let response = await new Queries[funcName](
      subPrompt.first,
      subPrompt.last,
      subPrompt.name,
      subPrompt.manager
    );
    await response.result();
    console.log(
      `\nSuccessfully added new employee: ${subPrompt.first} ${subPrompt.last} to the database.\n`
    );
    menu();
  } else if (funcName === "UpdateEmployeeRole") {
    const newEmployeeList = await CreateLists.prototype.getEmployeeList;
    questions.updateEmployee[0].choices = newEmployeeList;

    const newRoleList = await CreateLists.prototype.getRoleList;
    questions.updateEmployee[1].choices = newRoleList;

    let subPrompt = await inquirer.prompt(questions.updateEmployee);
    let response = await new Queries[funcName](subPrompt.role, subPrompt.name);
    await response.result();
    console.log(
      `\nSuccessfully updated the role of ${
        newEmployeeList[subPrompt.name - 1].name
      } to ${newRoleList[subPrompt.role - 1].name}. \n`
    );
    menu();
  } else {
    console.log(`\nApplication Closed. \n`);
    process.exit();
  }
}

menu();
