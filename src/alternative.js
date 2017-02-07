import request from 'request';
import cheerio from 'cheerio';

request('https://www.lovinaadventure.com.br', function (error, response, html) {

  if (!error && response.statusCode == 200) {

    var $ = cheerio.load(html);
    console.log( 'Alternative', $('#WIND_NOS').text() );
  }
});
