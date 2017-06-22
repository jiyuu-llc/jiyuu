import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Requests extends Component {
    constructor(props){
        super(props);
    }

    renderRequests(requests) {

        if (requests && requests.length > 0) {
            console.log(requests);
            return requests.map((req) => {
                return (
                    <div key={req._id} className="notifi-item">
                        <div className="notifiImageContain">
                            <img className="notifiImage" height="55px" width="55px" src={getUserInfo('_id', req.fromId, 'avatar') || fakeUser.avatar} />
                        </div>
                        <div className="notifiInfoContain">
                            <div className="notifiInfo">
                                Connection request from {getUserInfo('_id', req.fromId, 'name') || fakeUser.name}
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
                        <Link to="/notifications" className="notification-link">Alerts</Link>
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

export default Requests;
