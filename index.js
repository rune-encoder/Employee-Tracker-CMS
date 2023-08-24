// Bring in the Inquirer and Console.Table modules.
const inquirer = require("inquirer");
require("console.table");

// Bring in the Queries Constructor and it's children from queries.js
const Queries = require("./lib/queries.js");

// Bring in CreateLists constructor. Creates list for question's choices.
const { CreateLists, Delete } = require("./lib/queries.js");

// Bring in our Questions that will be used in Inquirer
const questions = require("./lib/questions.js");

// Console color for text
const color = require('./lib/console-colors.js');

// Console Art Logo
const figlet = require("figlet");

console.log(color.red(
  figlet.textSync("Employee CMS Database", {
    font: "Cybermedium",
    horizontalLayout: "default",
    verticalLayout: "default",
    width: 80,
    whitespaceBreak: true,
  })
));
console.log(color.red(`===============ᛒy ᚱuᚢe Eᚢcᛟdeᚱ===============`));

// Initialize and run our Main Menu with an Asynchronous Function.
async function menu() {
  // Prompts inquirer with first question.
  const prompt = await inquirer.prompt(questions.menu);

  // Selected choice is then joined to make it easier to reuse to call functions and constructors later.
  const funcName = await prompt.menu.split(" ").join("");
  if (
    funcName === "ViewAllDepartments" ||
    funcName === "ViewAllRoles" ||
    funcName === "ViewAllEmployees" ||
    funcName === "ViewEmployeesbyManager" ||
    funcName === "ViewTotalUtilizedBudget"
  ) {
    // Creates a new constructor function we have defined in queries.js.
    // Depending on our choice will determin which constructor will be used.
    // Example: if View All Departments was selected the constructor made is: new ViewAllDepartments();
    let response = await new Queries[funcName]();

    // Prints table based on any of the 5 choices.
    let answer = await response.result();
    console.table(answer[0]);

    // Restarts main menu.
    menu();
  } else if (funcName === "AddDepartment") {
    // Prompts inquirer with question to add a new department.
    let subPrompt = await inquirer.prompt(questions.addDepartment);

    // Creates a new constructor function passing in our answers.
    let response = await new Queries[funcName](subPrompt.name);

    // Using our answers a new department is added.
    await response.result();
    console.log(
      color.green(`\nSuccessfully added new department: ${subPrompt.name} to the database.\n`)
    );

    menu();
  } else if (funcName === "AddRole") {
    // Saves the list of departments in the database in a variable.
    const newDeptList = await CreateLists.prototype.getDepartmentList;

    // Updates the list for the choices section for our question in questions.js
    questions.addRole[2].choices = newDeptList;

    // Prompts inquirer with question to add a new role.
    let subPrompt = await inquirer.prompt(questions.addRole);

    // Creates a new constructor function passing in our answers.
    let response = await new Queries[funcName](
      subPrompt.title,
      subPrompt.salary,
      subPrompt.name
    );

    // Using our answers a new role is added.
    await response.result();
    console.log(
      color.green(`\nSuccessfully added new role: ${subPrompt.title} to the database.\n`)
    );

    menu();
  } else if (funcName === "AddEmployee") {
    // Saves the list of roles in the database in a variable.
    const newRoleList = await CreateLists.prototype.getRoleList;

    // Updates the list for the choices section for our question in questions.js
    questions.addEmployee[2].choices = newRoleList;

    // Saves the list of employees in the database in a variable.
    const newEmployeeList = await CreateLists.prototype.getEmployeeList;

    // Updates the list for the choices section for our question in questions.js
    questions.addEmployee[3].choices = newEmployeeList;

    // Prompts inquirer with question to add employee.
    let subPrompt = await inquirer.prompt(questions.addEmployee);

    // Creates a new constructor function passing in our answers.
    let response = await new Queries[funcName](
      subPrompt.first,
      subPrompt.last,
      subPrompt.name,
      subPrompt.manager
    );

    // Using our answers a new employee is added.
    await response.result();
    console.log(
      color.green(`\nSuccessfully added new employee: ${subPrompt.first} ${subPrompt.last} to the database.\n`)
    );

    menu();
  } else if (funcName === "UpdateEmployeeRole") {
    // Saves the list of employees in the database in a variable.
    const newEmployeeList = await CreateLists.prototype.getEmployeeList;

    // Updates the list for the choices section for our question in questions.js
    questions.updateEmployee[0].choices = newEmployeeList;

    // Saves the list of roles in the database in a variable.
    const newRoleList = await CreateLists.prototype.getRoleList;

    // Updates the list for the choices section for our question in questions.js
    questions.updateEmployee[1].choices = newRoleList;

    // Prompts inquirer with question to update employee role.
    let subPrompt = await inquirer.prompt(questions.updateEmployee);

    // Creates a new constructor function passing in our answers.
    let response = await new Queries[funcName](subPrompt.role, subPrompt.name);

    // Using our answers a employee role is updated.
    await response.result();
    console.log(
      color.green(`\nSuccessfully updated the role of ${
        newEmployeeList[subPrompt.name - 1].name
      } to ${newRoleList[subPrompt.role - 1].name}. \n`)
    );
    menu();
  } else if (funcName === "UpdateEmployeeManager") {
    // Saves the list of employees in the database in a variable.
    const newEmployeeList = await CreateLists.prototype.getEmployeeList;

    // Updates the list for the choices section for our questions in questions.js
    questions.updateManager[0].choices = newEmployeeList;
    questions.updateManager[1].choices = newEmployeeList;

    // Creates a new constructor function passing in our answers.
    let subPrompt = await inquirer.prompt(questions.updateManager);
    let response = await new Queries[funcName](
      subPrompt.manager,
      subPrompt.employee
    );

    // Using our answers a new employee manager is updated for an employee.
    await response.result();
    console.log(
      color.green(`\nSuccessfully updated the manager of ${
        newEmployeeList[subPrompt.employee - 1].name
      } to ${newEmployeeList[subPrompt.manager - 1].name}. \n`)
    );
    menu();
  } else if (funcName === "ViewEmployeesbyDepartment") {
    // Saves the list of departments in the database in a variable.
    const newDeptList = await CreateLists.prototype.getDepartmentList;

    // Updates the list for the choices section for our questions in questions.js
    questions.viewDepartment[0].choices = newDeptList;

    // Prompts inquirer with question to view employees by department.
    let subPrompt = await inquirer.prompt(questions.viewDepartment);
    
    // Creates a new constructor function passing in our answers.
    let response = await new Queries[funcName](subPrompt.name);

    // Using our answers a table is created.
    let answer = await response.result();
    console.table(answer[0]);
    menu();
  } else if (
    funcName === "RemoveDepartment" ||
    funcName === "RemoveRole" ||
    funcName === "RemoveEmployee"
  ) {
    // The question key maakes "RemoveDepartment" look like "removeDepartment".
    // It will make it easier to access the questions in questions.js.
    let questionKey =
      (await funcName.charAt(0).toLowerCase()) +
      funcName.slice(1).split(" ").join("");

    // The group variable will hold the name of the questions. department, role, or employee
    const group = await questions[questionKey][0].name;

    // The target list will make it easier for us to access the list via the prototype.
    // so if group was "department" target list will be "getDepartmentList"
    const targetList =
      "get" + group.charAt(0).toUpperCase() + group.slice(1) + "List";

    // Example: if department was chosen this will be the same as CreateList.prototype.getDepartmentList.
    // If deparment was chosen we will get that list. If employees we will get employee list. If role we will get role list. 
    questions[questionKey][0].choices = await CreateLists.prototype[targetList];

    // Prompts inquirer with question to remove either roles, department, or employees.
    let subPrompt = await inquirer.prompt(questions[questionKey]);

    // Creates new constructor function to handle our delete passing in our input.
    let response = new Delete(group, subPrompt[group]);

    // Using our answers either an employee, department, or role was deleted.
    await response.result();
    console.log(
      color.red(`\n Deleted ${
        questions[questionKey][0].choices[subPrompt[group] - 1].name
      } from the ${group} table.\n`)
    );
    menu();
  } else {
    console.log(color.red(`\nApplication Closed. \n`));
    process.exit();
  }
}

// Initialize Main Menu.
menu();
