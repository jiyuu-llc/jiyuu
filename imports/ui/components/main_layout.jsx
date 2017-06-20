import React, {Component} from 'react';
import ResolveUsers from '../containers/connectedUsers.js';
import Navigation from '../containers/navigation.js';
import Connect from '../containers/connect.js';

import {
	BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import List from '../../ui/containers/list.js'
import Messenger from '../../ui/components/messenger/messenger.jsx';
import Settings from '../../ui/containers/settings.js'


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
							<Route path="/messages" component={Messenger} />
							<Route path="/settings" component={Settings} />
							<Route path="/connect" component={Connect} />
						</Switch>
				</div>
				<Paginator />
			</div>
		</Router>
		)
	}
}

export default MainLayout;
