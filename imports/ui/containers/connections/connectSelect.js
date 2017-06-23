import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Connections } from '/lib/collections';
import ConnectSelect from '../../components/connections/connectSelect.jsx';

const composer = ( props, onData ) => {
    if (subsManager.subscribe('connections').ready()
        && connectedUserSub.ready()) {

        var action = props.action;
        var newPost = props.newPost;

        try {
          var connections = Connections.findOne({}).groups;
        } catch(TypeError) {}


        onData( null, { connections, newPost, action } );
    }

};

export default composeWithTracker(composer)(ConnectSelect);
