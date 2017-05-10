import React from 'react';
import ProfileOverview from '../../containers/profile/profile.js';
import List from '../../containers/profile/list.js';
import ProfileButtonsBar from './profileButtonsBar.jsx';
import ProfileSidebar from './profileSidebar.jsx';

const Profile = () => ({

  render() {
    return (
      <div className="container profile-container">
                <ProfileSidebar/>
                <div id="profile-filler" className="col-md-3 hidden-sm-down">
                </div>
                <div className="col-md-8 profileRight">
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
