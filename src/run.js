const ns = require('node-sketch');
const path = require('path');

const getSymbolColors = require('./color/getColorsFromSymbols');
const getArtboardColors = require('./color/getColorsFromArtboards');
const getTextStyles = require('./text/getTextStyle');
const csvExporter = require('./utils/csvExporter');

(async function() {
  const sketch = await ns.read(path.join(__dirname, '../', 'sketch/account.sketch'));
  const colors = await getArtboardColors(sketch)
  // const textStyles = await getTextStyles(sketch)
  await csvExporter(colors, "Colors")
})();
