import React, {Component} from 'react';



class  NewPost extends Component{

    newPost(){
        if (Meteor.userId()){
            const uploader = new Slingshot.Upload("myFileUploads");

            try {
                var file = document.getElementById('fileUpload').files[0];
            } catch (TypeError){}

            if (file) {
                uploader.send(file, (error, downloadUrl) => {
                    if (error) {
                        // Log service detailed response
                        console.error('Error uploading', uploader.xhr.response);
                        alert (error);
                    }
                    else {
                        Meteor.call('saveFile', file.type, downloadUrl);
                    }
                });
            }

            const content = $("#postValue").val();
            var canView = $('input[type=checkbox]:checked').map(function(i,el){return el.name;}).get() || [];
            Meteor.call('feed.add', content, canView, (err, res) => {
                if (!err && res) {
                    $("#postValue").val(null);
                }
            });
        }
    }

    render() {
        return (
                    <div className="modal-content">
                        <div className="modal-body">
                            <textarea className="form-control new-post" rows="5" id="postValue" />
                        </div>
                        <div className="modal-footer">
                            <button type="button" onClick={this.newPost.bind(this)} data-dismiss="modal" className="btn btn-primary">Post</button>
                            <input type="file" id="fileUpload" className="btn btn-primary-outline"/>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>
        );
    }
}

export default NewPost;
