// require node-sketch
const ns = require('node-sketch');

// require helper functiins
const convertToHEX = require('./utils/converToHEX');
const removeRepeats = require('./utils/removeRepeats');
const logger = require('./utils/logger');
const chalk = require('chalk');

/**
 * Return all colors on target page in HEX format
 * @param {string} file - path to the desired scketch file
 * @param {number} page - reference the desired page (value starts at 0)
 */

module.exports = (file, page = 0) => {
    logger('#fff', '', '\n✨ Retrieving colors...');
    // store target page
    const targetPage = file.pages[page];
    // create array of all colors on target page
    const colors = targetPage.getAll('color');
    // convert all colors in array to HEX format (######)
    const hexCodes = convertToHEX(colors);
    // remove all duplicate values and create reference of unique colors
    const uniqueColors = removeRepeats(hexCodes);
    // group similar colors
    let sorted = hexCodes.sort();
    // store first value in array
    let ref = sorted[0];
    // initialize count
    let count = 0;
    // loop threw and count duplicates
    for (let i = 0; i < sorted.length; i++) {
        // increase value of count if current value equals the reference
        if (ref === sorted[i]) {
            count++;
        }
        // print and reset values if color does not equal the reference
        else if (ref !== sorted[i]) {
            // print color and number of times it appears in document
            logger(ref, ref, `occurs ${count} times in this document.`);
            // reset ref to new value
            ref = sorted[i];
            // reset count
            count = 1;
        }
    }
    // print last color and number of times it appears in document
    logger(ref, ref, `occurs ${count} times in this document.`);
};
