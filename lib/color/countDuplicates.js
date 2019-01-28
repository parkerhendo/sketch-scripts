const ns = require('node-sketch');
const chroma = require('chroma-js');
const path = require('path');
const chalk = require('chalk');

const run = async () => {
  const sketch = await ns.read(path.join(__dirname, '../../', 'design.sketch'));
  const page = sketch.pages[0];
  const colors = page.getAll('color');

  const hexCodes = await convertToHEX(colors);
  const cleanedColors = await removeDuplicates(hexCodes);

  const counted = countDuplicates(hexCodes);
};

/**
 * Convert RGBA values to HEX
 * @param {Array} colors
 **/
const convertToHEX = (colors) => {
  const hexArr = [];
  const hexTransform = colors.forEach((color) => {
    const r = Math.round(color.red * 255);
    const g = Math.round(color.green * 255);
    const b = Math.round(color.blue * 255);
    const a = Math.round(color.alpha * 100);
    const hex = chroma([r, g, b]).hex();
    hexArr.push(hex);
  });
  return hexArr;
};

/**
 * return number of duplicates for each color
 * @param {Array} arr
 */
const countDuplicates = (arr) => {
  let sorted = arr.sort();
  let ref = arr[0];
  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (ref === sorted[i]) {
      count++;
    } else if (ref !== sorted[i]) {
      console.log(chalk.hex(ref).bold(`${ref}: `) + chalk.bold(`${count} times`));
      ref = arr[i];
      count = 1;
    }
  }
  console.log(chalk.hex(ref).bold(`${ref}: `) + chalk.bold(`${count} times`));
};

/**
 * Remove duplicate values from array
 * @param {Array} arr
 */
const removeDuplicates = (arr) => {
  return arr.filter((v, i) => arr.indexOf(v) === i);
};

run();
