import React from 'react';
import { Convos } from '/lib/collections';
import { composeWithTracker } from 'react-komposer';
import MessageList from '../../components/messenger/messageList.jsx';

const composer = ( props, onData ) => {
  if (Meteor.subscribe('convos').ready()) {
    const convoId = FlowRouter.getParam('convo');
    try {
      var messageItems = Convos.findOne({_id: convoId, "messages.deleted": false}, {fields:{messages:1}}).messages;
    } catch (TypeError) {}
    onData(null, {messageItems});
  }
};

export default composeWithTracker(composer)(MessageList);