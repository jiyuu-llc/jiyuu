import React from 'react';

const ProfileSidebar = () => ({

    render() {
        return (

            <div id="profileLeft" className="col-md-3 hidden-sm-down">
                    <img className="profilePic" src={getUserInfo('username', FlowRouter.getParam('username'), 'avatar') || '/images/users.png'} width="150px" height="150px"/>
                    <div className="card card-mini userInfo">
                        <br />
                        <center>
                            <a href={"/profile/" + FlowRouter.getParam('username')}>
                                <h4>{getUserInfo('username', FlowRouter.getParam('username'), 'name')}</h4>
                            </a>
                        </center>
                        <center><h5>@{FlowRouter.getParam('username')}</h5></center>
                        <a className="profile-link" href={"/profile/" + FlowRouter.getParam('username') + "/experiences"}>Experiences</a>
                        <a className="profile-link" href={"/profile/" + FlowRouter.getParam('username') + "/files"}>Files</a>
                        <a className="profile-link" href={"/profile/" + FlowRouter.getParam('username') + "/cards"}>Cards</a>
                    </div>

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

       </div>

        );
    }
});

export default ProfileSidebar;




