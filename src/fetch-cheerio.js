import fetch from 'node-fetch';
import cheerio from 'cheerio';

fetch('https://www.lovinaadventure.com.br')
  .then(response => {

    response.text()
    .then(htmlText => {

        let $ = cheerio.load(htmlText);
        console.log( $('#WIND_NOS').text() );
    });

  })
  .catch(err => {
    console.log(err);
  });
