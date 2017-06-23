import React, {Component} from 'react';
import ResolveUsers from '../containers/connectedUsers.js';
import Navigation from '../containers/navigation/navigation.js';
import Connect from '../containers/connections/connect.js';

import {
	BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import List from '../containers/feed/postList.js'
import Messenger from '../../ui/components/messenger/messenger.jsx';
import Settings from '../../ui/containers/settings.js'
import You from '../../ui/components/you/you.jsx'
import  Notifications from '../../ui/containers/notifications/notifications.js'
import Login from '../../ui/components/login/loginForm.jsx'
import Requests from '../../ui/components/requests/requests.jsx'
import Profile from '../../ui/containers/profile/profile.js'
import Media from '../../ui/containers/profile/media.js';


const Paginator = () => ({
	render(){
		return (
			<span></span>
		)
	},
	componentDidMount(){
		// Test via a getter in the options object to see if the passive property is accessed
		var supportsPassive = false;
		try {
		  var opts = Object.defineProperty({}, 'passive', {
		    get: function() {
		      supportsPassive = true;
		    }
		  });
		  window.addEventListener("test", null, opts);
		} catch (e) {}

		// Use our detect's results. passive applied if supported, capture will be false either way.
		window.addEventListener('scroll', ()=>{

			if (elementIsVisible($('.post-heading')[$('.post-heading').length - 4])
				|| elementIsVisible($('.post-heading')[$('.post-heading').length - 3])
                || elementIsVisible($('.post-heading')[$('.post-heading').length - 2])
                || elementIsVisible($('.post-heading')[$('.post-heading').length - 1])){

                if (Session.get('paginationLimit') && Session.get('lastScrolled')){

                    if (new Date().getTime() - 650 > Session.get('lastScrolled')){
                        Session.set('lastScrolled', new Date().getTime());
                        Session.set('paginationLimit', Session.get('paginationLimit') + 5);
                    }

                } else {
                    Session.set('lastScrolled', new Date().getTime());
                    Session.set('paginationLimit', 14);
                }
            }

		}, supportsPassive ? { passive: true } : false); 
		console.log("supportsPassive: ", supportsPassive);
	}
});


class MainLayout extends Component {

	constructor(props) {
		super(props);
		this.state = { isModalOpen: false, media: null }
	}

	render(){
		return(
		<Router>
			<div>
				<ResolveUsers />
				<Navigation />

				<div id="page-content">
						<Switch>
							<Route exact name="index" path="/" component={List} />
							<Route path="/settings" component={Settings} />
							<Route path="/messages" component={Messenger} />
							<Route path="/messages/convo/:convoId" component={Messenger} />
							<Route path="/connect" component={Connect} />
							<Route path="/you" component={You} />
							<Route path="/notifications" component={Notifications} />
							<Route path="/login" component={Login} />
							<Route path="/requests" component={Requests} />
							<Route path="/profile/:user" component={Profile} />
							<Route path="/profile/:user/media" component={Media} />
						</Switch>
				</div>
				<Paginator />
			</div>
		</Router>
		)
	}
}

export default MainLayout;
