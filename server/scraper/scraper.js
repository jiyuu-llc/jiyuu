import {Meteor} from 'meteor/meteor';
import {Feed, Mind} from '/lib/collections';
import _ from 'lodash';

scraperAddToFeed = (siteId) => {
  var scrape;
  switch (siteId) {
    case '__scraped__TheMindUnleashed':
      scrape = scrapeTheMindUnleashed();
      break;
    case '__scraped__TheAntiMedia':
      scrape = scrapeTheAntiMedia();
      break;
    case '__scraped__Futurism':
      scrape = scrapeFuturism();
      break;
    case '__scraped__TorrentFreak':
      scrape = scrapeTorrentFreak();
      break;
    case '__scraped__YourEdm':
      scrape = scrapeYourEdm();
      break;
    case '__scraped__Linux':
      scrape = scrapeLinux();
      break;
      return;
  }

  scrape.then(Meteor.bindEnvironment((freshScrape)=>{
      if (freshScrape.data && freshScrape.urls){
          Meteor.call("getScrapedSite", siteId, (err, res)=>{
              if (res){
                  for (var i = 0; i < freshScrape.data.length; i++){

                      if (res.urls.indexOf(freshScrape.data[i].url) === -1){

                          Feed.insert({
                              _id: Random.id(),
                              userId: siteId,
                              content: freshScrape.data[i].markdown,
                              createdAt: new Date(),
                              canView: ["public"]
                          });
                      }
                  }
              } else {
                  // new scrape, add all results
                  for (var i = 0; i < freshScrape.data.length; i++) {
                      Feed.insert({
                          _id: Random.id(),
                          userId: siteId,
                          content: freshScrape.data[i].markdown,
                          createdAt: new Date(),
                          canView: ["public"]
                      });
                  }
              }

              Mind.upsert({siteId: siteId}, {$addToSet: {urls: { $each: freshScrape.urls }}});
          });
      }
  }));
};
