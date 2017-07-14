'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {Router}  from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import Routes from './Routes';
import store from './store'


const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <h1>hello World</h1>
            <Routes />
        </Router>
    </Provider>,
    document.getElementById('main')
)