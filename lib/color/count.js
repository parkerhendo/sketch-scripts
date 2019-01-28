const ns = require('node-sketch');
const path = require('path');
const chalk = require('chalk');

const convertToHEX = require('../utils/converToHEX');
const removeRepeats = require('../utils/removeRepeats')

/**
 * return number of duplicates for each color
 * @param {Array} arr
 */
const count = async () => {
  const sketch = await ns.read(path.join(__dirname, '../../', 'design.sketch'));
  const page = sketch.pages[0];
  const colors = page.getAll('color');

  const hexCodes = await convertToHEX(colors);
  const cleanedColors = await removeRepeats(hexCodes);

  let sorted = hexCodes.sort();
  let ref = sorted[0];
  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (ref === sorted[i]) {
      count++;
    } else if (ref !== sorted[i]) {
      console.log(chalk.hex(ref).bold(`${ref}: `) + chalk.bold(`${count} times`));
      ref = sorted[i];
      count = 1;
    }
  }
  console.log(chalk.hex(ref).bold(`${ref}: `) + chalk.bold(`${count} times`));
};

count();