import React from 'react';

const renderIfData = (comment) => {
    if ( comment && comment.length > 0 ) {
            return <div key={comment._id} className="comment-item">Comment {comment.comment}</div>
    }
};


export const CommentItem = ( comment ) => ({
    render(){
        return(
            <div className="comment-item">
                { renderIfData( comment ) }
            </div>
        );
    }
});
