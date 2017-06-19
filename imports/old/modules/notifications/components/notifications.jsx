import React, {Component} from 'react';

class Notifications extends Component {
    constructor(props) {
        super(props);
    }

    openCall(notification) {
        var path = "/room/" + notification.token;
        Meteor.call('notification.remove', notification._id);
        window.location.href = path;
    }

    handleClick(notification) {
        if (notification.type === 'call') {
            this.openCall(notification);
        }
    }

    renderNotifications(notifications) {
        if (notifications && notifications.length > 0) {
            return notifications.map((notification) => {
                return (
                    <div key={notification._id} onClick={this.handleClick(notication)} className="notification-item">
                        {notification.text}
                    </div>
                )
            });
        } else {
            return "You have no pending notifications!";
        }
    }

    render() {
        const {notifications} = this.props;
        return (
            <div>
                <div className="notifications">
                    <div className="notification-links-bar">
                        <a className="notification-link">Alerts</a>
                        <a href="/requests" className="notification-link">Requests</a>
                    </div>
                </div>
                <div className="notification-list">
                  {this.renderNotifications(notifications)}
                </div>
            </div>
        )
    }
}

export default Notifications;