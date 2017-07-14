import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import store, { fetchMessages, fetchChannels } from '../store';

import Root from './Root';
import Home from './Home';
import Campus from './Campus';
import Students from './Students';
import { fetchStudents } from '../reducers/students';
import { fetchCampus } from '../reducers/campus';

class Main extends Component {


    render () {
        return (
            <div>
                <Root>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/api/" component={Students} />
                        <Route path="/api/:id" component={Campus} />
                        <Redirect to="/" />
                    </Switch>
                </Root>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
        fetchInitialData: () => {
            dispatch(fetchStudents());
            dispatch(fetchCampus());
        }
    }
}
const ConnectedMain = connect(null,mapDispatchToProps)(Main)
export default ConnectedMain