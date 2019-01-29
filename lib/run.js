const ns = require('node-sketch');
const path = require('path');

const countDocumentColors = require('./color/countDocumentColors');
const returnDocumentOpacities = require('./color/returnDocumentOpacities');


run = async () => {
  const sketch = await ns.read(path.join(__dirname, '../', 'design.sketch'));
  countDocumentColors(sketch, 0);
  return returnDocumentOpacities(sketch, 0);
}

run();