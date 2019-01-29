const ns = require('node-sketch');

const convertToHEX = require('./utils/converToHEX');
const removeRepeats = require('./utils/removeRepeats')
const logColor = require('./utils/logColor');

/** 
 * return number of duplicates for each color
 * @param {sketch file} sketch
 * @param {number} page
*/

module.exports = (file, page) => {
  const targetPage = file.pages[page];
  const colors = targetPage.getAll('color');

  const hexCodes = convertToHEX(colors);
  const cleanedColors = removeRepeats(hexCodes);

  let sorted = hexCodes.sort();
  let ref = sorted[0];
  let count = 0;
  for (let i = 0; i < sorted.length; i++) {
    if (ref === sorted[i]) {
      count++;
    } else if (ref !== sorted[i]) {
      logColor(ref, `occurs ${count} times in this document.`)
      ref = sorted[i];
      count = 1;
    }
  }
  logColor(ref, `occurs ${count} times in this document.`)
};
