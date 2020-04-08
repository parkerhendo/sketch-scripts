const ns = require('node-sketch');

const logger = require('../utils/logger');
const removeRepeats = require('../utils/removeRepeats');

module.exports = (file) => {
    let sizes = [];
    let families = [];
    let results = []
    file.pages.forEach((page) => {
        const textStyles = page.getAll('text');
        textStyles.forEach((textStyle) => {
            let artboard = textStyle.parent.name
            let page = textStyle.parent.parent.name
            textStyle.style.textStyle.getAll('fontDescriptor', (descriptor) => {
                let item = { page: page, artboard: artboard, ...descriptor.attributes }
                results.push(item)
            });
        });
    });

    logger('#fff', '', `All text styles retreived`);
    return results;
};
