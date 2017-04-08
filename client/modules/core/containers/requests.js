/**
 * Created by Zach on 3/7/17.
 */

import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Requests } from '/lib/collections';
import RequestList from '../components/requests.jsx';

const composer = ( props, onData ) => {
    const subscription = Meteor.subscribe( 'requests' );

    if ( subscription.ready() ) {
        const requests = Requests.find().fetch();
        onData( null, { requests } );
    }
};

export default composeWithTracker(composer)(RequestList);
