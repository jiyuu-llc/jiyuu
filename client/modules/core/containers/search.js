import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Feed } from '/lib/collections';
import Search from '../components/search.jsx';

const composer = ( props, onData ) => {
    if (Meteor.subscribe('userList').ready()) {

      var searchResults = Session.get('searchResults');

      var users = Meteor.users.find({}).fetch();

      onData( null, { searchResults, users} );
    }

};

export default composeWithTracker(composer, Search)(Search);
