import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Comments } from '/lib/collections';
import CommentsList from '../../components/feed/comments.jsx';

const composer = ( props, onData ) => {
    if (Meteor.subscribe('comments').ready()) {
        var query = props.data;
        var theComments = Comments.find({postId: query}).fetch();
        onData(null, {theComments})
    }
};

export default composeWithTracker(composer, CommentsList)(CommentsList);
