import React from 'react';

import { composeWithTracker } from 'react-komposer';
import { TestItems } from '../../../../lib/collections';
import { Test } from '../components/testList.jsx';

const composer = ( props, onData ) => {
    const subscription = Meteor.subscribe( 'test' );

    if ( subscription.ready() ) {
        const testItems = TestItems.find().fetch();
        onData( null, { testItems } );
    }
};

export default composeWithTracker( composer )( Test );