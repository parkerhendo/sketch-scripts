const ns = require('node-sketch');
const chroma = require('chroma-js');

run = async () => {
  const sketch = await ns.read(__dirname + '/design.sketch');
  const page = sketch.pages[0];
  const colors = page.getAll('color');
  // console.log(colors);
  const hexArr = [];
  const hexTransform = colors.forEach((color) => {
    const r = color.red;
    const g = color.green;
    const b = color.blue;
    const a = color.alpha;

    const hex = chroma([r, g, b, a]).hex();
    hexArr.push(hex);
  });

  const cleanedColors = removeDuplicates(hexArr);
  console.log(cleanedColors);

};

let removeDuplicates = (arr) => arr.filter((v,i) => arr.indexOf(v) === i);

run();
