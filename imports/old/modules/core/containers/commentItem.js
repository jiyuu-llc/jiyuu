import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Comments } from '/lib/collections';
import  {CommentItem}  from '../components/commentItem.jsx';

const composer = ( postId, onData ) => {
    if (Meteor.subscribe('comments').ready()) {
        var comment = Comments.findOne({postId:postId.postId});
        console.log(comment);
        onData( null, { comment } );
    }
};

export default composeWithTracker( composer, CommentItem)( CommentItem );
