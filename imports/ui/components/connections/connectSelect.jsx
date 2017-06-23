import React, {Component} from 'react';



class ConnectSelect extends Component{


    newPost(newPost, action){
        if (Meteor.userId()){
            const uploader = new Slingshot.Upload("myFileUploads");
            let canView = $('input[type=checkbox]:checked').map((i,el)=>{return el.name}).get() || [];
            const post = newPost;
            console.log(newPost);
            var postData = "";
            if (post.file) {
                console.log(post.file);
                uploader.send(post.file, (error, downloadUrl) => {
                    if (error) {
                        // Log servic -e detailed response
                        console.error('Error uploading', uploader.xhr.response);
                        alert (error);
                    }
                    else {
                        postData = downloadUrl;
                        Meteor.call('feed.add', post.content, canView, postData,post.file.type, (err, res) => {
                            if (!err && res) {
                                $("#postValue").val(null);
                            }
                        });
                        Meteor.call('saveFile', post.type, downloadUrl);
                    }
                });
            }else{
                Meteor.call('feed.add', post.content, canView, postData, (err, res) => {
                    if (!err && res) {
                        $("#postValue").val(null);
                    }
                });
            }
        }
        action();
    }


    listGroups(connections){
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
    }

    render(){

        const {connections, newPost, action} = this.props;
        console.log(newPost);
        return(
            <div>
                {this.listGroups(connections)}
                <button type="button" onClick={this.newPost.bind(this, newPost, action)} className="btn btn-primary">Post</button>
            </div>
        )
    }
}

export default ConnectSelect;
