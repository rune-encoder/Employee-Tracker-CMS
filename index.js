const inquirer = require("inquirer");

const Queries = require('./lib/queries.js');
const questions = require("./lib/questions.js");

console.info(`Program Start`);

async function menu() {
  const prompt = await inquirer.prompt(questions.menu)
  const funcName = await prompt.menu.split(" ").join("")
  const choice = await new Queries[funcName]() 
  let answer = await choice.connect()
  console.log(answer[0])
  menu()

}

menu()
