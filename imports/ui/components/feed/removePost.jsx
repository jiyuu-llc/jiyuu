import React, {Component} from 'react';


class RemovePost extends Component{


    removePostClick = (post, action) =>{
        Meteor.call('feed.remove',post._id);
        action("options");
    };

    closeModal(action){
        action("options")
    };

    render(){
        return(
            <div>
                <div className="modal-body">
                    <h6>Are you sure you would like to permanently delete this post?</h6>
                </div>
                <div className="modal-footer">
                    <button type="button" onClick={this.removePostClick.bind(this, this.props.post, this.props.action)} className="btn btn-danger">
                        Remove
                    </button>
                    <button type="button" onClick={this.closeModal.bind(this, this.props.action)} className="btn btn-default">Close</button>
                </div>
            </div>
        )
    }

}

export default RemovePost;