import React from 'react';
import { composeWithTracker } from 'react-komposer';
import Settings from '../components/settings.jsx';

const composer = ( props, onData ) => {
    if (Meteor.user()) {
        const user = Meteor.user();
        onData(null, {user});
    } else {
        const user = "deez nutz";
        onData(null, {user});
    }
};

export default composeWithTracker(composer)(Settings);
