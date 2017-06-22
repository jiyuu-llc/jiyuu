import React from 'react';

import {composeWithTracker} from 'react-komposer';
import {Files} from '/lib/collections';
import Experiences from '../../../../../ui/components/profile/experiences.jsx';

const composer = (props, onData) => {
    if (Meteor.subscribe('experiences').ready()) {
        const user = Meteor.users.findOneFaster({username: FlowRouter.getParam('username')});
        let experiences;

        try {
            experiences = Experiences.find({userId: user._id});
        } catch (TypeError) {}

        onData(null, {user, experiences});
    }
};

export default composeWithTracker(composer, Experiences)(Experiences);