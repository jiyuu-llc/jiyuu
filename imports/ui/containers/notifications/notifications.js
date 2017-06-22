import React from 'react';
import { composeWithTracker } from 'mantra-core';
import { Notifications } from '/lib/collections';
import NotificationsList from '../../components/notifications/notifications.jsx';

const composer = ( props, onData ) => {
    if (Meteor.subscribe('notifications').ready()){
        const notifications = Notifications.find({userId: Meteor.userId()}).fetch();
        onData(null, {notifications});
    }
};

export default composeWithTracker(composer, NotificationsList)(NotificationsList);