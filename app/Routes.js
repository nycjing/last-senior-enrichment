import React, { Component } from 'react';
import { render} from 'react-dom'
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Root from './components/Root';
import Students from './components/Students'
import Campus from './components/Campus'
import Home from './components/Home'
import { fectchCampus } from '../reducers/campus'
import { fetchStudents } from '../reducers/student'


    /* -----------------    COMPONENT     ------------------ */

class Routes extends Component {

    componentDidMount () {
        this.props.fetchInitialData();
        console.log(this.props.fetchInitialData());
    }

    render () {
        return (

                <Root>
                        <Switch>
                            <Route exact path="/api/add" component={Home} />
                            <Route exact path="/api/" component={Students} />
                            <Route exact path="/api/:id" component={Campus} />

                        </Switch>
                </Root>

        );
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        dispatch(fetchStudents());
        dispatch(fetchCampus());
    }
});

export default connect(mapProps, mapDispatch)(Routes);