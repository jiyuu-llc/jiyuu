import React from 'react';


const openCall = (notification) =>{
    var path = "/room/" + notification.token;
    Meteor.call('notification.remove', notification._id);
    window.location.href = path;
};

const renderIfData = (data) => {

    if (data && data.length > 0) {

        return data.map((notification) => {
            return <div key={notification._id} onClick={openCall.bind(this, notification)} className="notification-item">{notification.text}</div>
        });

    }
};

const NotificationList = ({data}) => (
    <div>
        <div className="notification-list">
            {renderIfData(data)}
        </div>
    </div>
);

export default NotificationList;