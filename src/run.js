const ns = require('node-sketch');
const path = require('path');

const countDocumentColors = require('./color/countDocumentColors');
const returnDocumentOpacities = require('./color/returnDocumentOpacities');

(async function() {
  const sketch = await ns.read(path.join(__dirname, '../', 'design.sketch'));
  await countDocumentColors(sketch, 0)
//   await returnDocumentOpacities(sketch, 0);
})();
