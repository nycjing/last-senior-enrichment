'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

import createBrowserHistory from 'history/lib/createBrowserHistory'

// import { connect } from 'react-redux';
// import { Route, Switch } from 'react-router-dom';
// import Root from './components/Root';
// import Students from './components/Students'
// import Campus from './components/Campus'
// import Home from './components/Home'
// import {fetchStudents, fectchCampus} from './store'

class AddStudent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            student: {
                name: '',
                email: '',
                age: '',
                campusId: '1'},

            dbtable:''
        }
        this.initState = {
            name: '',
            email: '',
            age: '',
            campusId: '',
            dbtable:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleChange(evt) {
        console.log('whats they typing?  ', this.state)
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleAdd(evt) {

        evt.preventDefault();
        console.log('need to seend out', this.state)
        axios.post(`/api/`, this.state)
            .then(() => {
                console.log('student is added to the list')
                return this.setState({
                    students:
                        [this.state.student, ...students]
                })
               /* return this.setState(this.initState)*/
            })
            .catch(err => console.error(err));
    }

    render() {
        const campuses = this.props.campuses

        return (
            <form onSubmit={this.handleAdd} className='form-horizontal'>
                <section>
                    <div className='form-group'>
                        <label className="col-sm-2 control-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" className="form-control" onChange={this.handleChange} name='name'/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Email</label>
                        <div className="col-sm-10">
                            <input name="email" type="text" className="form-control" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Age</label>
                        <div class="col-sm-10">
                            <input name="age" type="text" className="form-control" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Campus</label>
                        <div className="col-sm-10">
                            <select name="campusId" className="form-control" onChange={this.handleChange}>

                                {
                                    campuses && campuses.map(campus => (
                                        <option  className="form-control">{campus.name},{campus.id}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div class="form-group">
                        <label className="col-sm-2 control-label">Gender</label>
                        <div className="col-sm-10">
                            <select name="gender" className="form-control" onChange={this.handleChange}>
                                <option  className="form-control">Male</option>
                                <option  className="form-control">Female</option>
                            </select>
                        </div>
                    </div>

                    <div className="form-group">
                        <div className="col-sm-10">
                            <label className="col-sm-2 control-label">Add to: </label>
                            <input type="radio" name="dbtable" value="student" onChange={this.handleChange}/> Student
                            <input type="radio" name="dbtable" value="instructor" onChange={this.handleChange}/> Instructor
                        </div>
                    </div>


                    <div class="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">submit</button>
                    </div>
                </section>
            </form>
    );
    }
    }

    class Main extends React.Component {
        constructor() {
        super()
        this.state = {
        campuses:[]
    }
    }

        componentDidMount () {
        axios.get('/api/add')
        .then(res => res.data)
        .then(campuses => {
            console.log('list of campusus----',campuses)
        this.setState({campuses})
    })

    }

        render () {
        return (
        <div>
        <h1>Student List</h1>
        <AddStudent campuses={this.state.campuses} />
        </div>
        )
    }
    }


    const history = createBrowserHistory();

    ReactDOM.render(
        <Main />
    ,
    document.getElementById('main')
    )



    //{/*<select key={student.id} onClick ={()=> props.handleRemove(student.id)}>*/}
    //    {/*<button class="btn btn-xs btn-danger btn-default remove btn-circle">x*/}
    //    {/*</button>*/}
    //{/*</select>*/}
    //{/*<Students students={this.state.students} />*/}
