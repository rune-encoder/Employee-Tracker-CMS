// This console-colors.js file contains code to change the console's text color.
// It is not important for operation of the logo generator but helps with application aesthetic.

const black = (text) => `\x1b[30m${text}\x1b[0m`;
const white = (text) => `\x1b[37m${text}\x1b[0m`;
const blue = (text) => `\x1b[34m${text}\x1b[0m`;
const red = (text) => `\x1b[31m${text}\x1b[0m`;
const yellow = (text) => `\x1b[33m${text}\x1b[0m`;
const green = (text) => `\x1b[32m${text}\x1b[0m`;
const cyan = (text) => `\x1b[36m${text}\x1b[0m`;
const magenta = (text) => `\x1b[35m${text}\x1b[0m`;

module.exports = {
  black,
  white,
  blue,
  red,
  yellow,
  green,
  cyan,
  magenta,
};
