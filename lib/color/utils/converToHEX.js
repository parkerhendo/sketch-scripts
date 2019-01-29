const chroma = require('chroma-js');

/**
 * Convert RGBA values to HEX
 * @param {Array} colors
 **/
module.exports = (colors) => {
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