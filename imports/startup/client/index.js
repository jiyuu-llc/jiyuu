
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import Routes from './routes.js';

Meteor.startup(() => {
    render((
        <Routes />
    ), document.getElementById('app'));
});