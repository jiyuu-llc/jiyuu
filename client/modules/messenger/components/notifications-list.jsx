import React, {Component} from 'react';

class NotificationList extends Component {
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

    renderNotifications(data){
        if (data && data.length > 0) {
            return data.map((notification) => {
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

    render(){
        const {notifications} = this.props;
        return (
            <div>
                <div className="notification-list">
                    {this.renderNotifications(notifications)}
                </div>
            </div>
        )
    }
}

export default NotificationList;