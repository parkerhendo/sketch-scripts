const ns = require('node-sketch');
const path = require('path');

fonts = async () => {
  const sketch = await ns.read(path.join(__dirname, '../../', 'design.sketch'));
  const page = sketch.pages[1];
  // console.log(page);
  const textStyles = page.getAll('text');
  console.log(textStyles[0].style.textStyle.getAll('fontDescriptor'));
}

fonts();