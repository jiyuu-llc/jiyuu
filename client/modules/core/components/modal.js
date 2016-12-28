import React from 'react';

const renderConnections = (connections) => {
    if (Meteor.userId() && connections){
        return connections.map((group)=>{
            if (group.name != 'Blocked'){
                return (
                    <label key={group._id}>
                        <input type="checkbox" name={group._id}/>&nbsp;{group.name}
                    </label>
                )
            }
        })
    }
};

const Modal = ({connections}) => ({


    newPost(){
        if (Meteor.userId()){

            const content = $("#postValue").val();
            var canView = $('input[type=checkbox]:checked').map(function(i,el){return el.name;}).get() || [];
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
                        console.log(file.type);
                        Meteor.call('saveFile', file.type, downloadUrl);
                        Meteor.call('feed.add', content, canView, downloadUrl, file.type, (err, res) => {
                            if (!err && res) {
                                $("#postValue").val(null);
                            }
                        });
                    }
                });
            }

        }
    },

    render() {
        return (
            <div className="modal fade" id="siteModal" role="dialog">
                <div className="modal-dialog">

                    <div className="modal-content">
                        <div className="modal-body">
                            <textarea className="form-control new-post" rows="5" id="postValue"/>
                        </div>
                        <div className="modal-footer">
                            {renderConnections(connections)}
                            <label>
                              <input type="checkbox" name="public" defaultChecked/>&nbsp;Public
                            </label>
                            <button type="button" onClick={this.newPost.bind(this)} data-dismiss="modal" className="btn btn-primary">Post</button>
                            <input type="file" id="fileUpload" className="btn btn-primary-outline"/>
                            <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                        </div>
                    </div>

                </div>
            </div>
        );
    }
});

export default Modal;
