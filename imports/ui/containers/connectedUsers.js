import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {ResolveUsers} from '../components/connectedUsers.jsx';

const composer = ( props, onData ) => {
    connectedUserSub = Meteor.subscribe('connectedUsers', Session.get('requestedIds'), Session.get('requestedUsernames'));
    onData(null, {done: true});
};

export default composeWithTracker(composer, ResolveUsers)(ResolveUsers);
