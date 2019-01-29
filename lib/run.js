const ns = require('node-sketch');
const path = require('path');

const count = require('./color/countDocumentColors');

run = async () => {
  const sketch = await ns.read(path.join(__dirname, '../', 'design.sketch'));
  count(sketch, 0);
}

run();