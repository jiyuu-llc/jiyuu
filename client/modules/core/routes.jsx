import {Meteor} from 'meteor/meteor';
import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import List from './containers/list.js';
import TestList from './containers/testList.jsx'
import Profile from './components/profile/profile.jsx';
import Experiences from './containers/profile/experiences.js';
import Hello from './components/signup/hello.js';
import FName from './components/signup/fName.js';
import LName from './components/signup/lName.js';
import DOB from './components/signup/dob.js';
import Confirm from './components/signup/confirm.js';
import Contact from './components/signup/contact.js';
import Welcome from './components/signup/welcome.js';
import UName from './components/signup/uName.js';
import Password from './components/signup/password.js';
import Notifications from '../notifications/components/notifications.js';
import Settings from './containers/settings.js';
import Messenger from '../messenger/components/messenger.js';
import LoginForm from './components/loginForm.jsx';
import Connect from './containers/connect.js';
import Questions from '../jiyuu/components/jiyuu.js';
import AccountType from './components/signup/accountType.js';
import Interests from './components/signup/interests.js';
import Admin from './components/admin.jsx';
import Call from './components/call.jsx';

export default function (injectDeps, {FlowRouter}) {
    const MainLayoutCtx = injectDeps(MainLayout);

    FlowRouter.route('/', {
        name: 'list',
        triggersEnter: [function(context, redirect) {
          Session.set('paginationLimit', 7);
        }],
        action() {
            mount(MainLayoutCtx, {
                content: () => (<List />)
            });
        }
    });
    
    FlowRouter.route('/logout', {
        name: 'users.logout',
        action() {
            // Accounts.logout();
            Meteor.logout(() => {
                FlowRouter.go('/login');
            });
        }
    });

    FlowRouter.route('/profile', {
        name: 'users.myProfile',
        action: function(params, queryParams) {
          if (Meteor.user()) {
            FlowRouter.go("users.profile", {username: Meteor.user().username});
          } else {
            FlowRouter.go('/login');
          }
        }
    });


    FlowRouter.route('/profile/:username', {
        name: 'users.profile',
        triggersEnter: [function(context, redirect) {
          Session.set('paginationLimit', 7);
        }],
        action: function(params, queryParams) {

            if (!Meteor.userId()) {
                FlowRouter.go('/login');
            }

            mount(MainLayoutCtx, {
                content: () => (<Profile/>)
            });
        }
    });


    FlowRouter.route('/profile/:username/experiences', {
        name: 'users.experience',
        triggersEnter: [function(context, redirect) {
            Session.set('paginationLimit', 7);
        }],
        action: function(params, queryParams) {

            if (!Meteor.userId()) {
                FlowRouter.go('/login');
            }

            mount(MainLayoutCtx, {
                content: () => (<Experiences/>)
            });
        }
    });

    FlowRouter.route('/notifications', {
        name: 'notifications',
        action() {

            if (!Meteor.userId()) {
                FlowRouter.go('/login');
            }

            mount(MainLayoutCtx, {
                content: () => (<Notifications/>)
            });
        }
    });

    FlowRouter.route('/settings', {
        name: 'settings',
        action() {

            if (!Meteor.userId()) {
                FlowRouter.go('/login');
            }

            mount(MainLayoutCtx, {
                content: () => (<Settings/>)
            });
        }
    });

    FlowRouter.route('/messages', {
        name: 'messenger',
        action: function(params, queryParams) {

            if (!Meteor.userId()) {
                FlowRouter.go('/login');
            }

            mount(MainLayoutCtx, {
                content: () => (<Messenger/>)
            });
        }
    });

    FlowRouter.route('/messages/:convo', {
        name: 'messages',
        action() {

            if (!Meteor.userId()) {
                FlowRouter.go('/login');
            }

            mount(MainLayoutCtx, {
                content: () => (<Messenger/>)
            });
        }
    });

    FlowRouter.route('/login', {
        name: 'login',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<LoginForm/>)
            });
        }
    });

    FlowRouter.route('/connect', {
        name: 'connect',
        action() {

            if (!Meteor.user()) {
                FlowRouter.go('/login');
            }

            mount(MainLayoutCtx, {
                content: () => (<Connect/>)
            });
        }
    });

    FlowRouter.route('/questions', {
        name: 'questions',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<Questions/>)
            });
        }
    });

    FlowRouter.route('/register', {
        name: 'register',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<Hello />)
            });

        }
    });

    FlowRouter.route('/register/1', {
        name: 'register.1',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<AccountType/>)
            });

        }
    });

    FlowRouter.route('/register/2', {
        name: 'register.2',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<FName/>)
            });

        }
    });

    FlowRouter.route('/register/3', {
        name: 'register.3',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<LName/>)
            });

        }
    });


    FlowRouter.route('/register/4', {
        name: 'register.4',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<UName/>)
            });

        }
    });

    FlowRouter.route('/register/5', {
        name: 'register.5',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<Contact/>)
            });

        }
    });


    FlowRouter.route('/register/6', {
        name: 'register.6',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<Password/>)
            });

        }
    });


    FlowRouter.route('/register/7', {
        name: 'register.7',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<DOB/>)
            });

        }
    });


    FlowRouter.route('/register/8', {
        name: 'register.8',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<Interests/>)
            });

        }
    });


    FlowRouter.route('/register/9', {
        name: 'register.9',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<Confirm/>)
            });

        }
    });

    FlowRouter.route('/register/10', {
        name: 'register.10',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<Welcome/>)
            });

        }
    });

    FlowRouter.route('/reset', {
        name: 'reset',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<Reset />)
            });
        }
    });

    FlowRouter.route('/login', {
        name: 'users.login',
        action() {

            mount(MainLayoutCtx, {
                content: () => (<Login />)
            });
        }
    });


    FlowRouter.route('/admin', {
        name: 'admin',
        action() {
            mount(Admin);
        }
    });


    FlowRouter.route('/call', {
        name: 'call',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Call />)
            });
        }
    });
}
