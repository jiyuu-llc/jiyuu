import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Connections } from '/lib/collections';
import Modal from '../components/modal.js';

const composer = ( props, onData ) => {
    if (subsManager.subscribe('connections').ready()
        && connectedUserSub.ready()) {

        try {
          var connections = Connections.findOne({}).groups;
        } catch(TypeError) {}

        onData( null, { connections } );
    }

};

export default composeWithTracker(composer)(Modal);
