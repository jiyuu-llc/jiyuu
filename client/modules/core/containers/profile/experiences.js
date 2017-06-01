import React from 'react';

import {composeWithTracker} from 'react-komposer';
import {Files} from '/lib/collections';
import Experiences from '../../components/profile/experiences.jsx';

const composer = (props, onData) => {
    if (connectedUserSub.ready() && Meteor.subscribe('files').ready()) {
        const user = Meteor.users.findOneFaster({username: FlowRouter.getParam('username')});
        let files;

        try {
            files = Files.findOne({userId: userId}).files;
        } catch (TypeError) {}

        onData(null, {user, files});
    }
};

export default composeWithTracker(composer, Experiences)(Experiences);