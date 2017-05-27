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
                        <a className="profile-link" href={"/profile/" + FlowRouter.getParam('username') + "/files"}>Media</a>
                        <a className="profile-link" href={"/profile/" + FlowRouter.getParam('username') + "/cards"}>Cards</a>
                    </div>
                    <div className="card">
                        <div className="card-block"><h4>Photo's</h4></div>
                        <div className="card-block"></div>
                    </div>
                    <div className="card">
                        <div className="card-block"><h4>Stats</h4></div>
                        <div className="card-block"><strong>Shares</strong> <span className="pull-right">97</span></div>
                        <div className="card-block"><strong>Likes</strong> <span className="pull-right">42</span></div>
                        <div className="card-block"><strong>Followers</strong> <span className="pull-right">54</span></div>
                    </div>

       </div>

        );
    }
});

export default ProfileSidebar;




