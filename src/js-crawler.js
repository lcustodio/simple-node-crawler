var Crawler = require("js-crawler");

//new Crawler().configure({depth: 3})
//  .crawl('https://www.lovinaadventure.com.br', function onSuccess(page) {
//    console.log(page);
//  });

var crawler = new Crawler().configure({ignoreRelative: false, depth: 1});

crawler.crawl({
  url: "https://www.lovinaadventure.com.br",
  success: function(page) {
    console.log(page.url);
  },
  failure: function(page) {
    //console.log(page.status);
  },
  finished: function(crawledUrls) {
    console.log(crawledUrls);
  }
});