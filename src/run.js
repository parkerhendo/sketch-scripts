const ns = require('node-sketch');
const path = require('path');

const getColors = require('./color/getColors');
const getTextStyles = require('./text/getTextStyle');
const csvExporter = require('./utils/csvExporter');

(async function() {
  const sketch = await ns.read(path.join(__dirname, '../', 'sketch/account.sketch'));
  // await getColors(sketch)
  const textStyles = await getTextStyles(sketch)
  await csvExporter(textStyles, "Text Styles")
})();
