const chalk = require('chalk');

/**
 * Stylized console output
 * @param {string} color
 * @param {string} title
 * @param {string} statement
 */

module.exports = (color, title, statement) => {
  console.log(chalk.hex(color).bold(title) + (title.length > 0 ? ': ' : '') + chalk.bold(statement));
};