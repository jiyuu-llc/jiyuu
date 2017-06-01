import React, {Component} from 'react';
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

class CommentsList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {theComments} = this.props;
        if (theComments && theComments.length > 0) {
            return (
                <div className="comment-list">
                    {renderIfData(theComments)}
                </div>
            )
        } else {
            return null;
        }
    }
}

export default CommentsList;
