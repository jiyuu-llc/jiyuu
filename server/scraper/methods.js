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
  }
});
