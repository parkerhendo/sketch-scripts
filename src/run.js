const ns = require('node-sketch');
const path = require('path');

const getColors = require('./color/getColors');
const getTextStyles = require('./text/getTextStyle');

(async function() {
  const sketch = await ns.read(path.join(__dirname, '../', 'sketch/uikit.sketch'));
  await getColors(sketch)
// console.log(sketch.pages[0].get('artboard').name);
//   await getTextStyles(sketch)
})();
