import React from 'react';
import {Meteor} from'meteor/meteor';
import VideoTest from '../../components/messenger/videoTest';
import { composeWithTracker } from 'mantra-core';

const composer = ( props, onData ) => {
    const subscription = Meteor.subscribe('currentUser');
    if ( subscription.ready()) {
        const currentUser = Meteor.users.findOne();
        onData( null, { currentUser} )
    }
};

export default composeWithTracker( composer, VideoTest )( VideoTest );

