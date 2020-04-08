const ns = require('node-sketch');

const logger = require('../utils/logger');
const removeRepeats = require('../utils/removeRepeats');

module.exports = (file) => {
    logger('#fff', '', '\n✨ Retrieving text styles...');
    let sizes = [];
    let families = [];
    let results = []
    file.pages.forEach((page) => {
        const textStyles = page.getAll('text');
        // logger('#fff', '', `\nColors found in ${page.name}`);
        textStyles.forEach((textStyle) => {
            let data = textStyle.parent.name
            console.log(textStyle.parent.name)
            textStyle.style.textStyle.getAll('fontDescriptor', (descriptor) => {
                let item = {artboard: data, ...descriptor.attributes }
                results.push(item)
            });
        });
    });
    // logger('#fff', '', `Unique values found in File`);
    // logger('#fff', '', `Unique familes found...`);
    // console.log(removeRepeats(families));
    // logger('#fff', '', `Unique sizes found...`);
    // console.log(removeRepeats(sizes).sort());
    console.log(results)
    return results;
};
