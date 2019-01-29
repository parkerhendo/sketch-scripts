const ns = require('node-sketch');

const removeRepeats = require('./utils/removeRepeats');
const logger = require('./utils/logger');

module.exports = async (file, page) => {
  const targetPage = file.pages[page];
  const layerStyle = await targetPage.getAll('graphicsContextSettings');
  const resultArr = [];
  layerStyle.forEach(layer => {
    let opacity = layer.opacity;
    let transformedOpacity = Math.round(opacity * 100) / 100;
    resultArr.push(transformedOpacity);
  })

  const cleanedArr = removeRepeats(resultArr);

  logger('#e0e0e0', 'Opacities', `These have been found in your document: \n${cleanedArr}`);
}