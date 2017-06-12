import React from 'react';
import {composeWithTracker} from 'react-komposer';
import {Requests} from '/lib/collections';
import RequestList from '../components/requests.jsx';

const composer = (props, onData) => {
    if (Meteor.subscribe('requests').ready()) {
        const requests = Requests.find({to: Meteor.userId()}).fetch();
        onData(null, {requests});
    }
};

export default composeWithTracker(composer)(RequestList);