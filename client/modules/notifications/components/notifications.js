
import React from 'react';


const Notifications = () => ({
    render() {
        return (
            <div>
                <div className="notifications">
                    <div className="notification-links-bar">
                        <a className="notification-link">Alerts</a>
                        <a className="notification-link">Requests</a>
                    </div>
                </div>
                <div className="notification-list">
                  <div className="notifi-item">
                      <div className="notifiImageContain">
                        <img className="notifiImage" height="55px" width="55px" src="/images/profile.jpg" />
                      </div>
                      <div className="notifiInfoContain">
                        <div className="notifiInfo">
                          <h6>Alec Wantoch commented on your post.</h6>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
        );
    }
});

export default Notifications;
