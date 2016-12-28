import React from 'react';
import PostItem from './postItem.jsx';

const renderIfData = (feed) => {

    if (feed && feed.length > 0) {

        return feed.map((post) => {
            return <PostItem key={post._id} post={post} />
        });

    }
};

const List = ({feed}) => (
	<div className="postList col-md-12">
		{renderIfData(feed)}
	</div>
);

export default List;