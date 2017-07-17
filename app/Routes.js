import React, { Component } from 'react';
import { render} from 'react-dom'
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import Root from './components/Root';
import Students from './components/Students'
import Campus from './components/Campus'
import store from './store'
import Home from './components/Home'
import { fetchCampus } from './reducers/campus'
import { fetchStudents , removeStudent} from './reducers/students'
import createBrowserHistory from 'history/lib/createBrowserHistory'


    const history = createBrowserHistory();


    /* -----------------    COMPONENT     ------------------ */

class Routes extends Component {


    componentDidMount () {

    this.props.fetchInitialData();

    }

    render () {
      
        return (
            <Router history={history}>
                    <div id="main" className="container-fluid">
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <a className="navbar-brand" href="/">MHIAoJ</a>
                </div>

                <div id="nav-items" className="collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li><a href="/api/add">Add Student or Instructor</a></li>
                        <li><a href="/api/">Student List</a></li>
                    </ul>
                </div>
            </div>
        </nav>
         <Switch>
             <Route exact path="/" component={Home} campus={this.props.campuses}/>
             <Route path="/students" component={Students} />
             <Route exact path="/campus/:id" component={Campus} />

         </Switch>
         <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <p>Copyright &copy; MHIAoJ 2017-----</p>
                </div>
            </div>
        </div>
    </div>
        </Router>
        );
    }
}

/* -----------------    CONTAINER     ------------------ */

const mapProps = null;

const mapDispatch = dispatch => ({

  fetchInitialData: () => {
    dispatch(fetchCampus());
    dispatch(fetchStudents());
  }
  })
export default connect(mapProps, mapDispatch)(Routes);