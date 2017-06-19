import {Meteor} from 'meteor/meteor';
import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from '../ui/components/main_layout';
import List from '../ui/containers/list.js';
import TestList from '../../client/modules/core/containers/testList.jsx'
import Profile from '../../client/modules/core/containers/profile/profile.js';
import Experiences from '../../client/modules/core/containers/profile/experiences.js';
import Hello from '../../client/modules/core/components/signup/hello.js';
import FName from '../../client/modules/core/components/signup/fName.js';
import LName from '../../client/modules/core/components/signup/lName.js';
import DOB from '../../client/modules/core/components/signup/dob.js';
import Confirm from '../../client/modules/core/components/signup/confirm.js';
import Contact from '../../client/modules/core/components/signup/contact.js';
import Welcome from '../../client/modules/core/components/signup/welcome.js';
import UName from '../../client/modules/core/components/signup/uName.js';
import Password from '../../client/modules/core/components/signup/password.js';
import Notifications from '../../client/modules/notifications/containers/notifications.js';
import Settings from '../../client/modules/core/containers/settings.js';
import Messenger from '../../client/modules/messenger/components/messenger.jsx';
import LoginForm from '../../client/modules/core/components/loginForm.jsx';
import Connect from '../../client/modules/core/containers/connect.js';
import Questions from '../../client/modules/jiyuu/components/jiyuu.js';
import AccountType from '../../client/modules/core/components/signup/accountType.js';
import Interests from '../../client/modules/core/components/signup/interests.js';
import Admin from '../../client/modules/core/components/admin.jsx';
import VideoTest from '../../client/modules/messenger/containers/videoTest';
import Chat from '../../client/modules/messenger/components/chat';
import Requests from '../../client/modules/core/containers/requests.js';
import Media from '../../client/modules/core/containers/profile/media.js'

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

    FlowRouter.route('/profile/:username/media', {
        name: 'users.experience',
        triggersEnter: [function(context, redirect) {
            Session.set('paginationLimit', 7);
        }],
        action: function(params, queryParams) {

            if (!Meteor.userId()) {
                FlowRouter.go('/login');
            }

            mount(MainLayoutCtx, {
                content: () => (<Media/>)
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

    FlowRouter.route('/requests', {
        name: 'requests',
        action() {

            if (!Meteor.userId()) {
                FlowRouter.go('/login');
            }

            mount(MainLayoutCtx, {
                content: () => (<Requests/>)
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

    FlowRouter.route('/room/:id', {
        name: 'peerId',
        action() {
            mount(MainLayoutCtx, {
                content: () => (<Chat />)
            });
        }
    });


    FlowRouter.route('/call', {
        name: 'call',
        action() {
            if (Meteor.userId()) {
                mount(MainLayoutCtx, {
                    content: () => (<VideoTest />)
                });
            }
        }
    });

}
