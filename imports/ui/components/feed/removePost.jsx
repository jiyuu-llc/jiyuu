import React, {Component} from 'react';




class RemovePost extends Component{


    removePostClick = (id) =>{
        Meteor.call('feed.remove',id);
    };


    render(){
        return(
                <div className="modal-content">
                    <div className="modal-body">
                        <h6>Are you sure you would like to permanently delete this post?</h6>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={removePostClick.bind(this, this.props.post._id)} data-dismiss="modal"
                                className="btn btn-danger">Remove
                        </button>
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
            </div>
        )
    }

}

export default RemovePost;