import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Feed } from '/lib/collections';
import Search from '../../components/navigation/search.jsx';

const composer = ( props, onData ) => {
    if (Meteor.subscribe('userList').ready()) {

      let searchResults = Session.get('searchResults');

      let users = Meteor.users.find({}).fetch();

      onData(null, { searchResults, users});
    }

};

export default composeWithTracker(composer, Search)(Search);
