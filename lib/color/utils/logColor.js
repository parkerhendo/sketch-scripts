const chalk = require('chalk');

/**
 * Stylized console output
 * @param {string} color
 * @param {string} statement
 */

module.exports = (color, statement) => {
  console.log(chalk.hex(color).bold(`${color}: `) + chalk.bold(statement));
};