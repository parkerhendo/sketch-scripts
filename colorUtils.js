const ns = require('node-sketch');
const chroma = require('chroma-js');

run = async () => {
  const sketch = await ns.read(__dirname + '/design.sketch');
  const page = sketch.pages[0];
  const colors = page.getAll('color');
  const hexArr = [];

  const hexTransform = colors.forEach((color) => {
    const r = Math.round(color.red * 255);
    const g = Math.round(color.green * 255);
    const b = Math.round(color.blue * 255);
    const a = Math.round(color.alpha * 100);

    const hex = chroma([r, g, b]).hex();
    hexArr.push(hex);
  });

  const cleanedColors = removeDuplicates(hexArr);
  console.log(cleanedColors);

  console.log(countDuplicates(hexArr));
};

const countDuplicates = (arr) => {
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
