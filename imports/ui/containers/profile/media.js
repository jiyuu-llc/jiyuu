import React from 'react';

import {composeWithTracker} from 'react-komposer';
import {Files} from '/lib/collections';
import Media from '../../../../../ui/components/profile/media.jsx';

const composer = (props, onData) => {
    if (connectedUserSub.ready() && Meteor.subscribe('files').ready()) {
        const user = Meteor.users.findOneFaster({username: FlowRouter.getParam('username')});
        let files;
        try { files = Files.findOne({userId: user._id}).files; } catch(TypeError) {}
        onData(null, {user, files});
    }
};

export default composeWithTracker(composer, Media)(Media);