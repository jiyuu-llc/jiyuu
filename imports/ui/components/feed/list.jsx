import React from 'react';
import PostItem from './postItem.jsx';
import PostModal from './postModal.js'

const renderIfData = (feed) => {

    if (feed && feed.length > 0) {

        return feed.map((post) => {
            return <PostItem key={post._id} post={post} />
        });

    }
};

const List = ({feed}) => (
    <div>
	<div className="postList col-md-12">
		{renderIfData(feed)}
	</div>
        <PostModal/>
    </div>
);

export default List;