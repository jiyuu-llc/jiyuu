import React from 'react';
import Hammer from 'react-hammerjs';


const handleTap = (comment) =>{
    $("#" + comment).toggle();
};

const deleteComment = (comment) =>{
    Meteor.call('comment.delete', comment);
};

const renderIfData = (theComments) => {

    if (theComments && theComments.length > 0) {
        return theComments.map((comment) => {
            return (
                <Hammer key={comment._id} onDoubleTap={handleTap.bind(this, comment._id)}>
                    <div className="comment-item">
                        <strong>{getUserInfo('_id', comment.userId, 'name')}: </strong>{comment.comment}
                        <div onClick={deleteComment.bind(this, comment._id)} id={comment._id} className="convoDelete"></div>
                    </div>
                </Hammer>
            );
        });

    }
};

const CommentsList = ({theComments}) => (
    <div className="comment-list">
       {renderIfData(theComments)}
    </div>
);

export default CommentsList;
