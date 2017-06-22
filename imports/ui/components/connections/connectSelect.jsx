import React, {Component} from 'react';



class ConnectSelect extends Component{


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
            let canView = $('input[type=checkbox]:checked').map((i,el)=>{return el.name}).get() || [];

            Meteor.call('feed.add', content, canView, (err, res) => {
                if (!err && res) {
                    $("#postValue").val(null);
                }
            });
        }
    }

    render(){

        const {connections} = this.props;

        if (Meteor.userId() && connections){
            return connections.map((group)=>{
                if (group.name != 'Blocked'){
                    return (
                        <div>
                        <label key={group._id}>
                            <input type="checkbox" name={group._id}/>&nbsp;{group.name}
                        </label>
                            <button type="button" onClick={this.newPost} data-dismiss="modal" className="btn btn-primary">Post</button>
                        </div>
                    )
                }
            })
        }
    }
}

export default ConnectSelect;
