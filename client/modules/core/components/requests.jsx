import React, {Component} from 'react';

class RequestList extends Component {
    constructor(props){
        super(props);
    }

    renderRequests(requests) {

        if (requests && requests.length > 0) {
            return requests.map((fromId, toId) => {
                return (
                    <div className="notifi-item">
                        <div className="notifiImageContain">
                            <img className="notifiImage" height="55px" width="55px" src={getUserInfo('_id', fromId, 'avatar') || fakeUser.avatar} />
                        </div>
                        <div key={from} className="notifiInfoContain">
                            <div className="notifiInfo">
                                Connection request from {getUserInfo('_id', fromId, 'name') || fakeUser.name}
                                <div>Accept</div>
                                <div>Decline</div>
                            </div>
                        </div>
                    </div>
                )
            })
        } else {
            return "You have no pending requests!";
        }
    }

    render() {
        const {requests} = this.props;
        return (
            <div>
                <div className="notifications">
                    <div className="notification-links-bar">
                        <a href="/notifications" className="notification-link">Alerts</a>
                        <a className="notification-link">Requests</a>
                    </div>
                </div>
                <div className="notification-list">
                    {this.renderRequests(requests)}
                </div>
            </div>
        )
    }
}

export default RequestList;
