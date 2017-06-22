import React from 'react';

const updateInfo = () => {
    var color = $( "select#registerColor option:selected").val() || false;
    var navPosition = $( "select#navPosition option:selected").val() || false;
    var password1 = $("#password1").val();
    var password2 = $("#password2").val();
    var password3 = $("#password3").val();


    if(color){
        Meteor.call('changeColor',color);
        console.log(Meteor.user().color);
    }

    if(password1){
        if(password2 === password3){
            Accounts.changePassword(password1, password2);
        }else{
            alert("Passwords don't match!");
        }
    }

    if(navPosition){
        Meteor.call("changeNav", navPosition);
    }
};

const clickLogOut = () => {
    Meteor.logout(() => {
        FlowRouter.go('/login');
    });
};

const Settings = ({user}) => (
      <div className="settings-card-contain">
        <div id="settings-card" className="card">
            <div className="card-block">
                <div className="col-md-12 personal-info">
                        <div className="form-group">
                            <label className="col-lg-12 control-label">Theme</label>
                            <div className="col-lg-12">
                                <select defaultValue={user.color} className="form-control" id="registerColor">
                                    <option value="purpleBar">jiyuu</option>
                                    <option value="blueBar">Blue</option>
                                    <option value="redBar">Red</option>
                                    <option value="blackBar">Black</option>
                                    <option value="pinkBar">Pink</option>
                                    <option value="yellowBar">Yellow</option>
                                    <option value="greenBar">Green</option>
                                    <option value="whiteBar">White</option>
                                </select>
                            </div>
                        </div>
                    <div className="form-group">
                        <label className="col-lg-12 control-label">Navbar Position</label>
                        <div className="col-lg-12">
                            <select defaultValue={user.navPosition} className="form-control" id="navPosition">
                                <option value="topNav">Top</option>
                                <option value="leftNav">Left</option>
                                <option value="rightNav">Right</option>
                                <option value="bottomNav">Bottom</option>
                            </select>
                        </div>
                    </div>
                        <div className="form-group">
                            <label className="col-md-12 control-label">Current Password:</label>
                            <div className="col-md-12">
                                <input id="password1" className="form-control" type="password" name="oldPasswordVar"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12 control-label">New Password:</label>
                            <div className="col-md-12">
                                <input id="password2" className="form-control" type="password" name="newPasswordVar"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12 control-label">Confirm password:</label>
                            <div className="col-md-12">
                                <input id="password3" className="form-control" type="password" name="confirmPasswordVar"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-md-12 control-label"> </label>
                            <div className="col-md-12">
                                <button type="button" className="btn btn-primary btn-s" onClick={updateInfo.bind(this)}>Save Changes</button>
                                <button type="button" className="btn btn-default btn-s" onClick={clickLogOut.bind(this)} aria-expanded="false">Logout</button>
                                <button type="button" className="btn btn-default btn-s logoutAllDevices" aria-expanded="false">Logout all Devices!</button>
                                <button type="button" className="btn btn-danger btn-s" data-toggle="modal" data-target="#deleteAccountConfirmation">Delete Account</button>
                                <br/>
                                <br/>
                                <center><h6>Current version: 0.1.6</h6></center>
                            </div>
                        </div>
                </div>
            </div>
            <br/>
        </div>
      </div>
);

export default Settings;
