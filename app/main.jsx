'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import store from './store';
import Routes from './Routes';

    const history = createBrowserHistory();

    ReactDOM.render(

        <Provider store={store}>
            <Router history={history}>
                <Routes />
            </Router>
        </Provider>,
    document.getElementById('main')
    )

