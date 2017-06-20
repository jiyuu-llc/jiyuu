
import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

import MainLayout from '../../ui/components/main_layout.jsx';

Meteor.startup(() => {
    render((
        <MainLayout />
    ), document.getElementById('app'));
});