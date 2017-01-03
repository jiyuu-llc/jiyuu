import React from 'react';
import ResolveUsers from '../containers/connectedUsers.js';
import Navigation from '../containers/navigation.js';
import Modal from '../containers/modal.js';
/* import jPop from '../../../pops'; */

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

			if (elementIsVisible($('.post-heading')[$('.post-heading').length - 3])){

                if (Session.get('paginationLimit') && Session.get('lastScrolled')){

                    if (new Date().getTime() - 1200 > Session.get('lastScrolled')){
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

const Layout = ({ content }) => (
            <div>
                <ResolveUsers />
                <Navigation />

                <div id="page-content">
                    {content()}
                </div>
                <Modal />
                <Paginator />
            </div>
);

export default Layout;
