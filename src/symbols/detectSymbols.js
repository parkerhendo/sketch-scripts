const ns = require('node-sketch');

module.exports = (file) => {
    file.pages.forEach(page => {
        if (page.name !== 'Symbols') {
            console.log(page.layers[1]);
        }
    })
}