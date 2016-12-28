import React from 'react';

const ProfileSidebar = () => ({

    render() {
        return (
            <div id="profileSidebar" className="hidden-sm-down col-md-12">
                <div className="card card-mini">
                    <div className="card-block"><h4>YouTube</h4></div>
                    <div className="card-block">
                    </div>
                </div>
                <div className="card">
                    <div className="card-block"><h4>Photo's</h4></div>
                    <div className="card-block"></div>
                </div>
                <div className="card">
                    <div className="card-block"><h4>Stats</h4></div>
                    <div className="card-block"><strong>Shares</strong> <span className="pull-right">125</span></div>
                    <div className="card-block"><strong>Likes</strong> <span className="pull-right">42</span></div>
                    <div className="card-block"><strong>Followers</strong> <span className="pull-right">78</span></div>
                </div>
            </div>
        );
    }
});

export default ProfileSidebar;




