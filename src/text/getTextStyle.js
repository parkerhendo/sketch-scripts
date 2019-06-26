const ns = require('node-sketch');

const logger = require('../utils/logger');
const removeRepeats = require('../utils/removeRepeats');

module.exports = (file) => {
    logger('#fff', '', '\n✨ Retrieving text styles...');
    let sizes = [];
    let families = [];
    file.pages.forEach((page) => {
        const textStyles = page.getAll('text');
        logger('#fff', '', `\nColors found in ${page.name}`);
        textStyles.forEach((textStyle) => {
            textStyle.style.textStyle.getAll('fontDescriptor', (descriptor) => {
                console.log(descriptor.attributes);
                sizes.push(descriptor.attributes.size);
                families.push(descriptor.attributes.name);
            });
        });
    });
    logger('#fff', '', `Unique values found in File`);
    logger('#fff', '', `Unique familes found...`);
    console.log(removeRepeats(families));
    logger('#fff', '', `Unique sizes found...`);
    console.log(removeRepeats(sizes).sort());
};
