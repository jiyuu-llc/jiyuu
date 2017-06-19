
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'

import MainLayout from '../../ui/components/main_layout.jsx';
import List from '../../ui/containers/list.js'

export default () => (

    <BrowserRouter>
        <Route component={MainLayout}>
            <Route path="/" component={List} />
        </Route>
    </BrowserRouter>
);