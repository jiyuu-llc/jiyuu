import React from 'react';
import { composeWithTracker } from 'react-komposer';
import Navigation from '../../components/navigation/navigation.jsx';

const composer = ( props, onData ) => {
    if (Meteor.user()) {
        const user = Meteor.user();
        onData(null, {user});
    } else {
        const user = {
            color: "purpleBar",
            navPosition: "topNav"
        };
        onData(null, {user});
    }
};

export default composeWithTracker(composer, Navigation)(Navigation);