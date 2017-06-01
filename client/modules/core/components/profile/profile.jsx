import React, {Component} from 'react';
import ProfileOverview from '../../components/profile/profileOverview.jsx';
import List from '../../containers/profile/list.js';
import ProfileSidebar from './profileSidebar.jsx';

class Profile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {user} = this.props;
        return (
            <div className="container profile-container">
                <ProfileSidebar user={user || fakeUser} />
                <div id="profile-filler" className="col-md-3 hidden-sm-down">
                </div>
                <div className="col-md-8 profileRight">
                    <ProfileOverview user={user || fakeUser} />
                    <div id="profileMain" className="col-xs-12">
                        <List />
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile;
