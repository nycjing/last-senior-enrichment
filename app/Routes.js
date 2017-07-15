import React, { Component } from 'react';
import { render} from 'react-dom'
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Root from './components/Root';
import Students from './components/Students'
import Campus from './components/Campus'
import Home from './components/Home'
import { fectchCampus } from './reducers/campus'
import { fetchStudents , removeStudent} from './reducers/students'
import createBrowserHistory from 'history/lib/createBrowserHistory'


    const history = createBrowserHistory();


    /* -----------------    COMPONENT     ------------------ */

class Routes extends Component {


    componentDidMount () {
        this.props.fetchInitialData();

    }

    render () {
        console.log('-------')
        console.log(this.props.students);

        return (
            <Router history={history}>
                <Root>
                         <Switch>
                             <Route exact path="/" component={Home} />
                             <Route path="/students" component={Students} />
                             <Route exact path="/campus/:id" component={Campus} />

                         </Switch>
                </Root>
        </Router>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({
    fetchInitialData: () => {
        dispatch(fetchStudents());
        dispatch(removeStudent());
    }
});

export default connect(mapProps, mapDispatch)(Routes);