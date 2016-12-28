import React from 'react';

import {composeWithTracker} from 'react-komposer';
import {Files} from '/lib/collections';
import Experiences from '../../components/profile/experiences.jsx';

const composer = (props, onData) => {
    if (connectedUserSub.ready() && Meteor.subscribe('files').ready()) {
        var userId, files;

        try {
            userId = Meteor.users.findOneFaster({username: FlowRouter.getParam('username')}, {fields: {_id: 1}})._id;
            files = Files.findOne({userId: userId}).files;
        } catch (TypeError) {}

        onData(null, {files});
    }
};

export default composeWithTracker(composer, Experiences)(Experiences);