const ExportToCsv = require('export-to-csv').ExportToCsv
const fs = require('fs')
const path = require('path')

const csvExporter = (data, title) => {
  const options = {
    fieldSeparator: ',',
    fileName: title,
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: true,
  };

  const csvExporter = new ExportToCsv(options);

  const csvData = csvExporter.generateCsv(data, true)
  fs.writeFileSync(path.join(__dirname, '../../data', `${title}.csv`),csvData)

};

module.exports = csvExporter;