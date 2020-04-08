// require modules
const ns = require('node-sketch');
const chalk = require('chalk');

// require helper functiins
const convertToHEX = require('../utils/converToHEX');
const removeRepeats = require('../utils/removeRepeats');
const logger = require('../utils/logger');

/**
 * Return all colors on target page in HEX format
 * @param {string} file - path to the desired scketch file
 * @param {number} page - reference the desired page (value starts at 0)
 */

module.exports = (file) => {
    const symbols = file.symbolsPage.getAll('symbolMaster');
    symbols.forEach(sym => {
        console.log(`${sym.name}-------------`);
        sym.layers.forEach(layer => {
          if (layer._class === 'SymbolInstance') {
            layer.destroy();
          };
        })
        const colors = sym.getAll('color');
        const hexCodes = convertToHEX(colors);
        const uniqueColors = removeRepeats(hexCodes);

        let sorted = hexCodes.sort();
        let ref = sorted[0];
        let count = 0;
        for (let i = 0; i < sorted.length; i++) {
            if (ref === sorted[i]) {
                count++;
            }
            else if (ref !== sorted[i]) {
                console.log(ref);
                ref = sorted[i];
            }
        }
        console.log(ref);
    })
};