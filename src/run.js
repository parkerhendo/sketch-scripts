const ns = require('node-sketch');
const path = require('path');

const getColors = require('./color/getColors');
const returnDocumentOpacities = require('./color/getOpacities');
const detectSymbols = require('./symbols/detectSymbols');

(async function() {
  const sketch = await ns.read(path.join(__dirname, '../', 'design.sketch'));
  await detectSymbols(sketch)
})();
