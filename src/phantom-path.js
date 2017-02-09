

var url = 'https://www.lovinaadventure.com.br';

var page = require('webpage').create();
//page.onConsoleMessage = function(msg) {
//  console.log('Tan tan:' + msg);
//};
page.open(url, function() {
  //page.evaluate(function() {
  //  console.log( document.getElementById('WIND_NOS').innerHTML );
  //});
  var ua = page.evaluate(function() {
    return document.getElementById('WIND_NOS').textContent;
  });
  console.log(ua);

  phantom.exit();
});
