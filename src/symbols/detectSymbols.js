const ns = require('node-sketch');

module.exports = (file) => {
    file.foreignSymbols.forEach(symbol => {
        console.log(symbol.style);
    })
}