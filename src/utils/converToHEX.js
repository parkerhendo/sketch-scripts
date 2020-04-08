const chroma = require('chroma-js');

/**
 * Convert RGBA values to HEX
 * @param {Array} colors - Array of colors passed in from sketch document
 **/

module.exports = (color) => {

  const r = Math.round(color.red * 255);

  const g = Math.round(color.green * 255);

  const b = Math.round(color.blue * 255);

  const opacity = Math.round(color.alpha * 100);

  const hex = chroma([r, g, b]).hex().toUpperCase();
  return {hex, opacity};
};
