
const phantom = require('phantom');
var url = 'https://www.lovinaadventure.com.br';

(async function() {

  const instance = await phantom.create();
  const page = await instance.createPage();

  await page.open(url);

  page.evaluate(function() {
    return document.getElementById('WIND_NOS').innerHTML;
  }).then(function(html){
    console.log(html);
  });

  await instance.exit();
}());
