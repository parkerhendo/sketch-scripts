/**
 * Remove duplicate values from array
 * @param {Array} arr
 */
module.exports = (arr) => {
  return arr.filter((v, i) => arr.indexOf(v) === i);
};