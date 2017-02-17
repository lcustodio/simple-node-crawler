
const phantom = require('phantom');
const csv = require('ya-csv');
const fs = require('fs');
const url = 'https://www.lovinaadventure.com.br';

(async function() {

  const instance = await phantom.create();
  const page = await instance.createPage();

  await page.open(url);

  page.evaluate(function() {
    return document.getElementById('WIND_NOS').innerHTML;
  }).then(function(html){

    console.log(html);

    var writer = csv.createCsvStreamWriter(fs.createWriteStream('archive.csv', {'flags': 'a'}));

    var regex = /\d+[\.\d]*/i;
    var numberValue = html.match(regex);

    writer.writeRecord([new Date(), numberValue]);
  });

  await instance.exit();
}());
