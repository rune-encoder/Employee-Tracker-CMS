const inquirer = require("inquirer");

const { mysql, db } = require('./config/connection.js');
const Queries = require('./lib/queries.js');
const questions = require("./lib/questions.js");

console.info(`Program Start`);

async function menu() {
  const start = await inquirer.prompt(questions.menu)
  const resJoin = await start.menu.split(" ").join("")
  const prompt = await new Queries[resJoin]() 
  await prompt.connect()
  menu()

}

menu()

// .then((response) => response.menu.split(" ").join(""))
// .then((response) => choice(response))
// .catch((err) => console.log(err));