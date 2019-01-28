const ns = require('node-sketch');
const chroma = require('chroma-js');
const path = require('path');

run = async () => {
  const sketch = await ns.read(path.join(__dirname, '../', 'design.sketch'));
  const page = sketch.pages[0];
  const colors = page.getAll('color');
  const hexArr = [];

  const hexTransform = colors.forEach((color) => {
    const r = Math.round(color.red * 255);   // multiplied by 255 to convert to HEX
    const g = Math.round(color.green * 255); // multiplied by 255 to convert to HEX
    const b = Math.round(color.blue * 255);  // multiplied by 255 to convert to HEX
    const a = Math.round(color.alpha * 100); // multiplied by 100 to convert to HEX

    const hex = chroma([r, g, b]).hex();
    hexArr.push(hex);
  });

  const cleanedColors = removeDuplicates(hexArr);
  console.log(cleanedColors);

  console.log(countDuplicates(hexArr));
};

const countDuplicates = (arr, length) => {
  let sorted = arr.sort();
  let ref = arr[0];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (ref === arr[i]) {
      count++;
    } else if (ref !== arr[i]) {
      console.log(`${ref}: ${count} times`);
      ref = arr[i];
      count = 0;
    }
  }
};

// remove duplicate values from array
const removeDuplicates = (arr) => {
  return arr.filter((v, i) => arr.indexOf(v) === i);
};

run();