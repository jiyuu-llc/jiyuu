import React, {Component} from 'react';

class NewPost extends Component {

    newPost = (action) => (e) =>{
        if (Meteor.userId() && e){

            try {
                var file = document.getElementById('fileUpload').files[0];
            } catch (TypeError){}
            const content = $("#postValue").val();

            var postObject = {
                content: content,
                file: file
            };

            action(postObject);
        }
    };

    render() {
        var action = this.props.action;
        return (
                    <div>
                        <div>
                            <textarea className="form-control new-post" rows="5" id="postValue" />
                        </div>
                        <div>
                            <button type="button" onClick={this.newPost(action)} data-dismiss="modal" className="btn btn-primary">Post</button>
                            <input type="file" id="fileUpload" className="btn btn-primary-outline"/>
                        </div>
                    </div>
        );
    }
}

export default NewPost;
