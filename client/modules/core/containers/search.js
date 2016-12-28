import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Feed } from '/lib/collections';
import SearchComponent from '../components/search.jsx';

const composer = ( props, onData ) => {
    if (connectedUserSub.ready()) {

      var searchResults = Session.get('searchResults');

      var users = Meteor.users.find({}).fetch();
      var feed = Feed.find({}).fetch();

      onData( null, { searchResults, users, feed } );
    }

};

export default composeWithTracker(composer, SearchComponent)(SearchComponent);
