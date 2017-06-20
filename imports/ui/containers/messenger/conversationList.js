import React from 'react';
import ConvoList from '../../components/messenger/conversationList.jsx';
import { composeWithTracker } from 'react-komposer';
import { Convos } from '../../../../lib/collections';

const composer = ( props, onData ) => {
  const subscription = Meteor.subscribe('convos');

  if ( subscription.ready() && connectedUserSub.ready()) {
    const convoItems = Convos.find({users: { $in: [Meteor.userId()]}}, {sort: {lastActive: -1}}, {fields: {_id: 1, users: 1, lastActive: 1}}).fetch();
    onData( null, { convoItems } );
  }
};

export default composeWithTracker( composer )( ConvoList );
