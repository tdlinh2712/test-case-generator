import React from 'react';
import AppLayout from './AppLayout';
import Dashboard from './Dashboard';

import * as actions from '../actions';
import { connect } from 'react-redux';

const App = () => {
    return (
        <AppLayout>
           <Dashboard/>
        </AppLayout>
    )
}

export default connect(null, actions)(App);
