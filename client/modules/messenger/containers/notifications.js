import React from 'react';
import { composeWithTracker } from 'mantra-core';
import { Notifications } from '/lib/collections';
import NotificationsList from '../components/notifications-list.jsx';

const composer = ( props, onData ) => {
    if (Meteor.subscribe('notifications').ready()){
        var data = Notifications.find({userId: Meteor.userId()}).fetch();
        console.log(data);
        onData(null, {data});
    }
};

export default composeWithTracker(composer, NotificationsList)(NotificationsList);
