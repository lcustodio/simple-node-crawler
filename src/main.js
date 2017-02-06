import fetch from 'node-fetch';
import parse5 from 'parse5';

fetch('https://www.lovinaadventure.com.br')
  .then(response => {

    response.text()
    .then(a => {

        const document = parse5.parse(a);

        //console.log(document.childNodes[1].tagName); //> 'html'
        console.log(document.childNodes[1].childNodes[2]); //> 'html'
    });

  })
  .catch(err => {
    console.log(err);
  });
