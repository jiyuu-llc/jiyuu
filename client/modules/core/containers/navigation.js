import React from 'react';
import { composeWithTracker } from 'react-komposer';
import Navigation from '../components/navigation.jsx';

const composer = ( props, onData ) => {
    if (Meteor.user()) {
        const userColor = Meteor.user().color;
        onData(null, {userColor});
    } else {
        onData(null, {userColor: "purpleBar"});
    }
};

export default composeWithTracker(composer, Navigation)(Navigation);