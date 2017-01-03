import React from 'react';



const removePostClick = (id) =>{
    Meteor.call('feed.remove',id);
};


const renderModal = () =>{

    var currentPost = Session.get('currentPost') || false;

    if (currentPost.userId === Meteor.userId()) {
        return(
            <div className="modal fade" id="postOptions" role="dialog">
                <div className="modal-dialog bigDog">

                    <div className="modal-content">
                        <div className="modal-body">
                            <h6>Are you sure you would like to permanently delete this post?</h6>
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={removePostClick.bind(this, currentPost._id)} data-dismiss="modal"
                                    className="btn btn-danger">Remove
                            </button>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
            )
    }else{
        return(
            <div className="modal fade" id="postOptions" role="dialog">
                <div className="modal-dialog bigDog">
                    <div className="modal-content">
                        <div className="modal-body">
                            <center><button className="btn btn-primary-outline">Share</button></center>
                            <br/>
                            <center><button className="btn btn-primary-outline">Report</button></center>
                            <br/>
                            <center><button className="btn btn-primary-outline">See more</button></center>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

};


const PostModal = () =>(
    <div>
        {renderModal()}
    </div>
    );

export default PostModal;