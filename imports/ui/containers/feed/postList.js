import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Feed } from '/lib/collections';
import PostList from '../../components/feed/postList.jsx';

const composer = ( props, onData ) => {
    if (subsManager.subscribe('mainFeed', Session.get('paginationLimit')).ready()
        && connectedUserSub.ready()) {
        var feed = Feed.find({}, {sort: {createdAt: -1}}).fetch() || fakeFeed;
        onData(null, {feed});
    }
};

export default composeWithTracker(composer, PostList)(PostList);
