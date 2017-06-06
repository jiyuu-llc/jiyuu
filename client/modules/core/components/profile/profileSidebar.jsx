import React from 'react';

const ProfileSidebar = ({user}) => (

    <div id="profileLeft" className="col-md-3 hidden-sm-down">
            <img className="profilePic box-shadow" src={user.avatar} width="150px" height="150px"/>
            <div className="card card-mini userInfo box-shadow">
                <br />
                <center>
                    <a href={"/profile/" + user.username}>
                        <h4>{user.firstName + ' ' + user.lastName}</h4>
                    </a>
                </center>
                <center><h5>@{user.username}</h5></center>
                <a className="profile-link" href={"/profile/" + user.username + "/experiences"}>Experiences</a>
                <a className="profile-link" href={"/profile/" + user.username + "/media"}>Media</a>
                <a className="profile-link" href={"/profile/" + user.username + "/cards"}>Cards</a>
            </div>
            <div className="card box-shadow">
                <div className="card-block"><h4>Stats</h4></div>
                <div className="card-block"><strong>Shares</strong> <span className="pull-right">97</span></div>
                <div className="card-block"><strong>Likes</strong> <span className="pull-right">42</span></div>
                <div className="card-block"><strong>Followers</strong> <span className="pull-right">54</span></div>
            </div>
    </div>
);

export default ProfileSidebar;




