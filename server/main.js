import { Meteor } from 'meteor/meteor';
import {Feed, Connections, Convos} from '/lib/collections';
import {Random} from 'meteor/random';
import _ from 'lodash';

Meteor.startup(() => {

    Feed._ensureIndex({ '_id': 1, 'userId': 1, 'canView': 1, 'tagged': 1});
    Connections._ensureIndex({ '_id': 1, 'userId': 1});
    Convos._ensureIndex({'_id': 1, users: 1});
  // code to run on server at startup
    SyncedCron.stop();

    SyncedCron.add({
        name: 'Scrape Websites',
        schedule: function(parser) {
            // parser is a later.parse object
            return parser.recur().on('03:33:33').time();
        },
        job: function() {
            scraperAddToFeed('__scraped__TheMindUnleashed');
            scraperAddToFeed('__scraped__TheAntiMedia');
            scraperAddToFeed('__scraped__Futurism');
            scraperAddToFeed('__scraped__TorrentFreak');
            scraperAddToFeed('__scraped__Linux');
        }
    });

    SyncedCron.start();
});
