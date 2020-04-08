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
  let results = []
  file.pages.forEach((page) => {
      const colors = page.getAll('color');
      console.log(page.name)
      console.log('—————————————————————————————————————————————————————————————————————————')
      colors.forEach(color => {
        let artboardData = color.getParent('artboard')
        let {hex, opacity} = convertToHEX(color)
        let item = {page: page.name, artboard: artboardData.name, hex, opacity }
        results.push(item)
      })
  });
  console.log(results)
  return results
}