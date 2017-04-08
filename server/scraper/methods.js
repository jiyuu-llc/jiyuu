import {Meteor} from 'meteor/meteor';

Meteor.methods({
  'scrape.tmu': () => {
    scraperAddToFeed('__scraped__TheMindUnleashed');
  },
  'scrape.antimedia': () => {
    scraperAddToFeed('__scraped__TheAntiMedia');
  },
  'scrape.futurism': () => {
    scraperAddToFeed('__scraped__Futurism');
  },
  'scrape.torrentfreak': () => {
    scraperAddToFeed('__scraped__TorrentFreak');
  },
  'scrape.linux': () => {
    scraperAddToFeed('__scraped__Linux');
    console.log("scraped");
  },
  'scrape.youredm': () => {
    scraperAddToFeed('__scraped__Linux');
    console.log("scraped");
  },
  'scrapeAll'(){
    scraperAddToFeed('__scraped__TheMindUnleashed');
    scraperAddToFeed('__scraped__TheAntiMedia');
    scraperAddToFeed('__scraped__Futurism');
    scraperAddToFeed('__scraped__TorrentFreak');
    scraperAddToFeed('__scraped__Linux');
    scraperAddToFeed('__scraped__YourEdm');
  }
});
