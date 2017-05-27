import React from 'react';

const ProfileButtonsBar = () => ({



    galleryClick(){
       var galleryLink = "/profile/" + FlowRouter.getParam('username') + "/experiences";
        FlowRouter.go(galleryLink);
    },

    render() {
        return (
            <div className="pbuttons">
                <div className="pbutton" id="connectionsButton">
                    <div className="pb-text">
                      <i className="fa fa-plus-circle pb-icon" aria-hidden="true"/>
                      <p>Connect</p>
                    </div>
                </div>
                <div id="messageButton" className="pbutton">
                    <div className="pb-text">
                      <i className="fa fa-envelope pb-icon" aria-hidden="true"/>
                      <p>Message</p>
                    </div>
                </div>
                <div className="pbutton" onClick={this.galleryClick.bind(this)}>
                  <div className="pb-text">
                    <i className="fa fa-picture-o pb-icon" aria-hidden="true"/>
                    <p>Experiences</p>
                  </div>
                </div>
                <div className="pbutton">
                  <div className="pb-text">
                    <i className="fa fa-clone pb-icon" aria-hidden="true"/>
                    <p>Media</p>
                  </div>
                </div>
            </div>
        );
    }
});

export default ProfileButtonsBar;
