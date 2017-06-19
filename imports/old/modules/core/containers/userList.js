import React from 'react';
import {Meteor} from'meteor/meteor';
import UserList from '../components/userList.jsx';
import { composeWithTracker } from 'react-komposer';

const composer = ( props, onData ) => {
    const subscription = Meteor.subscribe('userList');
    if ( subscription.ready()) {
        const userItems = Meteor.users.find({}).fetch();
        console.log(userItems);
        onData( null, { userItems } )
    }
};

export default composeWithTracker( composer )( UserList );
