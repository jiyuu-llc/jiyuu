import React from 'react';
import { composeWithTracker } from 'react-komposer';
import Settings from '../components/settings.jsx';

const composer = ( props, onData ) => {
    if (Meteor.user()) {
        const userColor = Meteor.user().color;
        onData(null, {userColor});
    }
};

export default composeWithTracker(composer)(Settings);
