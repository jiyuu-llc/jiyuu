import React from 'react';
import PostItem from '../../../ui/components/feed/postItem.jsx';

const renderIfData = ( feed ) => {
    if ( feed && feed.length > 0 ) {
        return feed.map( ( post ) => {
            return <PostItem key={post._id} post={post} />
        });
    } else {
        return "This user has not made any posts!";
    }
};

const ProfilePostList = ( { feed } ) => (
    <div className="postList col-md-8 col-md-offset-2">
        { renderIfData( feed ) }
    </div>
);

export default ProfilePostList;