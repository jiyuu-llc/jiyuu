
import React from 'react';
import {
    BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import List from '../../ui/containers/feed/postList.js'
import Messenger from '../../ui/components/messenger/messenger.jsx';
import Settings from '../../ui/components/settings.jsx'



/* This component is not Currently in use!!!*/
export default () => (
    <Router history={history}>
        <Switch>
            <Route path="/" component={List} />
            <Route path="/messages" component={Messenger} />
            <Route path="/messages" component={Settings} />
        </Switch>
    </Router>
);