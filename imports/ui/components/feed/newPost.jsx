import React, {Component} from 'react';

class NewPost extends Component {

    newPost(){
        if (Meteor.userId()){

            try {
                var file = document.getElementById('fileUpload').files[0];
            } catch (TypeError){}
            const content = $("#postValue").val();

            var postObject = {
                content: content,
                data: file
            };

            Session.set('newPost', postObject);
        }
    }

    render() {
        return (
                    <div>
                        <div>
                            <textarea className="form-control new-post" rows="5" id="postValue" />
                        </div>
                        <div>
                            <button type="button" onClick={this.newPost} data-dismiss="modal" className="btn btn-primary">Post</button>
                            <input type="file" id="fileUpload" className="btn btn-primary-outline"/>
                        </div>
                    </div>
        );
    }
}

export default NewPost;
