import React from 'react';

const PostModal = () => ({


    removePostClick(){
        Meteor.call('feed.remove',Session.get('postId'));
    },


    render() {
        return (
            <div className="modal fade" id="postOptions" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-body">
                            <h6>Are you sure you would like to permanently delete this post?</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.removePostClick.bind(this)} data-dismiss="modal" className="btn btn-danger">Remove</button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

export default PostModal;