import React from 'react';

const renderIfData = (theComments) => {

    if (theComments && theComments.length > 0) {
        return theComments.map((comment) => {
            return <div key={comment._id} className="comment-item"><strong>{getUserInfo('_id', comment.userId, 'name')}: </strong>{comment.comment}</div>
        });

    }
};

const CommentsList = ({theComments}) => (
    <div className="comment-list">
       {renderIfData(theComments)}
    </div>
);

export default CommentsList;
