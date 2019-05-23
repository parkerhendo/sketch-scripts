const ns = require('node-sketch');
const path = require('path');

const getColors = require('./color/getColors');
const getTextStyles = require('./text/getTextStyle');
const detectSymbols = require('./symbols/detectSymbols');

(async function() {
  const sketch = await ns.read(path.join(__dirname, '../', 'test.sketch'));
//   await getColors(sketch)
    await detectSymbols(sketch);
//   await getTextStyles(sketch)
})();
