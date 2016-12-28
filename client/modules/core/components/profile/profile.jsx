import React from 'react';
import ProfileOverview from '../../containers/profile/profile.js';
import List from '../../containers/profile/list.js';
import ProfileButtonsBar from './profileButtonsBar.jsx';
import ProfileSidebar from './profileSidebar.jsx';

const Profile = () => ({

  render() {
    return (
      <div className="container profile-container">
        <div className="col-md-3 hidden-sm-down">
          <div className="profile-stuff">
            <div className="tab-content">
              <div className="tab-pane active" id="home">
                <div className="row">
                  <img className="profilePic" src={getUserInfo('username', FlowRouter.getParam('username'), 'avatar') || '/images/users.png'} width="150px" height="150px"/>
                  <div className="card card-mini userInfo">
                      <br />
                      <center><h4>{getUserInfo('username', FlowRouter.getParam('username'), 'name')}</h4></center>
                      <center><h5>@{FlowRouter.getParam('username')}</h5></center>
                      <a className="profile-link" href={"/profile/" + FlowRouter.getParam('username') + "/experiences"}>Experiences</a>
                      <a className="profile-link" href="/">Files</a>
                      <a className="profile-link" href="/">Cards</a>
                  </div>
                  <ProfileSidebar/>
                </div>
              </div>
              <div className="tab-pane" id="profilePhotos">
              </div>
              <div className="tab-pane" id="profileModules">
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <ProfileOverview />
          <div id="profileMain" className="col-xs-12">
            <ProfileButtonsBar />
            <br/>
            <List />
          </div>
        </div>
      </div>
    );
  }

});

export default Profile;
