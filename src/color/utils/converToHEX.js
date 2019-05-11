const chroma = require('chroma-js');

/**
 * Convert RGBA values to HEX
 * @param {Array} colors - Array of colors passed in from sketch document
 **/

module.exports = (colors) => {
  // create empty array
  const hexArr = [];

  // convert color values to HEX
  const hexTransform = colors.map((color) => {

    // red
    const r = Math.round(color.red * 255);

    // blue
    const g = Math.round(color.green * 255);

    // green
    const b = Math.round(color.blue * 255);
    
    // alpha
    const a = Math.round(color.alpha * 100);

    // merge r, g, b into HEX code
    const hex = chroma([r, g, b]).hex();

    // push new value to array
    hexArr.push(hex);
  });
  return hexArr;
};