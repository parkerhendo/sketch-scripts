// requiring node-sketch
const ns = require('node-sketch');

// requiring helper funtions
const removeRepeats = require('./utils/removeRepeats');
const logger = require('./utils/logger');

/**
 * Run threw page and return all unique values for layer opacity
 * @param {string} file - path to the desired scketch file
 * @param {number} page - reference the desired page (value starts at 0)
 */

module.exports = async (file, page = 0) => {

  // choose target page
  const targetPage = file.pages[page];

  // array of each layers graphicContextSettings properties
  const layerStyle = await targetPage.getAll('graphicsContextSettings');

  // empty array for storing values
  const resultArr = [];

  // loop through all layers and find opacity
  layerStyle.forEach((layer) => {

    // target current layers opacity property
    let opacity = layer.opacity;

    // transform all opacities to a two digit decimal (0.00)
    let transformedOpacity = Math.round(opacity * 100) / 100;

    // push new value to empty array
    resultArr.push(transformedOpacity);
  });

  // remove all duplicate values from results array leaving only unique values
  const uniqueValues = removeRepeats(resultArr);

  // print result of method
  logger('#e0e0e0', 'Opacities', `These have been found in your document: \n${uniqueValues}`);
};
