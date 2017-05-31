import React from 'react';

const clickOverview = () => {
    event.preventDefault();
    console.log("Clicked!");
    document.getElementById("flip").classList.toggle("hover");
    $("#flip").toggleClass(".flipper");
};

const profilePicClick = () => {
    console.log("test");
    if (FlowRouter.getParam('username') === Meteor.user().username){
        $("#confirmUpload").show();
    }
};

const coverPicClick = () => {
    console.log("clicked");
    if (FlowRouter.getParam('username') === Meteor.user().username){
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

const userNameClick = () =>{
    FlowRouter.go(FlowRouter.getParam('username'));
};

class ProfileOverview extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let user = getUserInfo('all', 'username', FlowRouter.getParam('username')) || fakeUser;
        return (
            <div id="flip" className="flip-container">
                <div className="flipper">
                    <div className="front">
                        <span className="fa fa-info-circle user-overview-toggle-active" aria-hidden="true" onClick={clickOverview.bind(this)}/>
                        <div className="card panel-white profile-widget panel-shadow panel-flip">
                            <div onClick={coverPicClick.bind(this)} className="cover-upload-contain">
                                <input onChange={coverChange.bind(this)} id="coverUpload" className="picOverlay" type="file"/>
                                <span onClick={coverPicClick.bind(this)} className="fa fa-camera cover-upload-icon" type='file'> </span>
                            </div>
                            <img id="coverPhoto" className="coverPhoto" src={getUserInfo('username', FlowRouter.getParam('username'), 'cover') || '/images/cover.jpeg'}/>
                            <button id="confirmCoverUpload" onClick={confirmCoverUploadClick.bind(this)} className="btn btn-primary-outline">Save</button>
                            <div className="col-xs-12 topP">
                                <div className="profilePicContain">
                                    <button id="confirmUpload" onClick={confirmUploadClick.bind(this)} className="btn btn-primary-outline">Save</button>
                                    <input id="profileUpload" onChange={profileChange.bind(this)} type="file" className="picOverlay" onClick={profilePicClick.bind(this)}/>
                                    <img className="hidden-md-up" id="profilePic" src={getUserInfo('username', FlowRouter.getParam('username'), 'avatar') || '/images/users.png'} width="130px" height="130px"/>
                                </div>
                            </div>
                            <div className="details hidden-md-up">
                                <h3 className="profileName">{getUserInfo('username', FlowRouter.getParam('username'), 'name')}</h3>
                                <h5 className="profileUsername">@{FlowRouter.getParam('username')}</h5>
                            </div>
                        </div>
                        <div className="action-bar">
                            <div className="action-button">Connect</div>
                            <div className="action-button">Message</div>
                            <div className="action-button">Experiences</div>
                            <div className="action-button">Media</div>
                        </div>
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

