import React, {Component} from 'react';
import ActionBar from './actionBar.jsx';

const clickOverview = () => {
    event.preventDefault();
    console.log("Clicked!");
    document.getElementById("flip").classList.toggle("hover");
    $("#flip").toggleClass(".flipper");
};

const profilePicClick = (user) => {
    if (user.username === Meteor.user().username){
        $("#confirmUpload").show();
    }
};

const coverPicClick = (user) => {
    console.log("clicked");
    if (user.username === Meteor.user().username){
        $("#confirmCoverUpload").show();
    }
};

const confirmUploadClick = () => {
    $("#confirmUpload").hide();
    var uploader = new Slingshot.Upload("myFileUploads");

    uploader.send(document.getElementById('profileUpload').files[0], function (error, downloadUrl) {
        if (error) {
            // Log service detailed response
            console.error('Error uploading', uploader.xhr.response);
            alert(error);
        }
        else {
            Meteor.call('updateProfilePic', Meteor.userId(), downloadUrl);
        }
    });

};

const confirmCoverUploadClick = () => {
    $("#confirmCoverUpload").hide();
    var uploader = new Slingshot.Upload("myFileUploads");

    uploader.send(document.getElementById('coverUpload').files[0], function (error, downloadUrl) {
        if (error) {
            // Log service detailed response
            console.error('Error uploading', uploader.xhr.response);
            alert(error);
        }
        else {
            Meteor.call('updateCoverPic', downloadUrl);
        }
    });

};

const profileChange = () => {
    var preview = document.getElementById("profilePic");
    var file    = document.getElementById('profileUpload').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
};

const coverChange = () =>{
    var preview = document.getElementById("coverPhoto");
    var file    = document.getElementById('coverUpload').files[0];
    var reader  = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
};

class ProfileOverview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <div id="flip" className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <span className="fa fa-info-circle user-overview-toggle-active" aria-hidden="true" onClick={clickOverview.bind(this)}/>
                        <div className="card panel-white profile-widget panel-shadow panel-flip">
                            <div onClick={coverPicClick.bind(this, user)} className="cover-upload-contain">
                                <input onChange={coverChange.bind(this)} id="coverUpload" className="picOverlay" type="file"/>
                                <span className="fa fa-camera cover-upload-icon" type='file'> </span>
                            </div>
                            <img id="coverPhoto" className="coverPhoto box-shadow" src={user.cover}/>
                            <button id="confirmCoverUpload" onClick={confirmCoverUploadClick.bind(this)} className="btn btn-primary-outline">Save</button>
                            <div className="col-xs-12 topP">
                                <div className="profilePicContain">
                                    <button id="confirmUpload" onClick={confirmUploadClick.bind(this)} className="btn btn-primary-outline">Save</button>
                                    <input id="profileUpload" onChange={profileChange.bind(this, user)} type="file" className="picOverlay" onClick={profilePicClick.bind(this, user)}/>
                                    <img className="hidden-md-up" id="profilePic" src={user.avatar} width="130px" height="130px"/>
                                </div>
                            </div>
                            <div className="details hidden-md-up">
                                <h3 className="profileName">{user.firstName + ' ' + user.lastName}</h3>
                                <h5 className="profileUsername">@{user.username}</h5>
                            </div>
                        </div>
                        <ActionBar user={user} />
                    </div>
                    <div className="back">
                        <div className="user-overview-info">
                            <span className="fa fa-info-circle user-overview-toggle-active" aria-hidden="true" onClick={clickOverview.bind(this)}/>
                            <center><h1 className="info-text">Featured Card Here!</h1></center>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProfileOverview;

