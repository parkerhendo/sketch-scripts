const ns = require('node-sketch');
const path = require('path');

const getColors = require('./color/getColors');
const getTextStyles = require('./text/getTextStyle');

(async function() {
  const sketch = await ns.read(path.join(__dirname, '../', 'sketch/account.sketch'));
  await getColors(sketch)
  // await getTextStyles(sketch)
})();
