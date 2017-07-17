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
            name: '',
            email: '',
            age: '',
            campusId: '1',
            dbtable:''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this)
       
    }

    handleChange(evt) {
        this.setState({[evt.target.name]: evt.target.value});
    }

    handleAdd(evt) {
        evt.preventDefault();
        const studentData = this.state;
        this.props.addStudent(studentData)
        this.setState( {
            name: '',
            email: '',
            age: '',
            campusId: '1',
            dbtable:''
        })
    }

    render() {
        const campuses = this.props.campuses
        const students = this.props.students
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
                        <div className="col-sm-10">
                            <input name="age" type="text" className="form-control" onChange={this.handleChange}/>
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-sm-2 control-label">Campus</label>
                        <div className="col-sm-10">
                            <select name="campusId" className="form-control" onChange={this.handleChange}>
                               {
                                    campuses && campuses.map(campus => (
                                        <option  className="form-control" key={campus.id} value={campus.id}>{campus.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
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


                    <div className="col-sm-offset-2 col-sm-10">
                        <button type="submit" className="btn btn-primary">submit</button>
                    </div>
                </section>
            
                  <table className='table'>
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Campus</th>
           
            </tr>
            </thead>
            <tbody>
            {
                students && students.map(student => (

                    <tr key={student.id}>
                        <td></td>
                        <td>{ student.name }</td>
                        <td>
                            <span >{ student.campus.name }</span>
                        </td>
                        <td>
                            
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
        </form>
 
    );
    }
    }

    class Main extends React.Component {
        constructor() {
        super()
        this.state = {
        students:[],
        campuses:[]
        }
        this.handleRemove = this.handleRemove.bind(this)
        this.addStudent = this.addStudent.bind(this)
    }

        componentDidMount () {
        axios.get('/api/add')
        .then(res => res.data)
        .then(campuses => {
            console.log('list of campusus----',campuses)
        this.setState({campuses})
    })
        axios.get('/api/')
        .then(res => res.data)
        .then(students => {
            console.log('list of students----',students)
        this.setState({students})
    })

    }

       handleRemove (studentId) {
        	console.log(studentId)
        axios.delete(`/api/${studentId}/delete`)
            .then( ()=> {
                return this.setState({
                    students: this.props.students.filter(student => student.id !== studentId)
                })
            })
            .catch(err => console.error(err));
    }

    addStudent (studentData){
    	
        axios.post('/api/', studentData)
            .then(res=>res.data)
            .then((student) => {
            	 console.log(student)
            	 student.campus={}
                this.setState({
                    students: [...this.state.students,student] 
                })
            })
            .catch(err => console.error(err));
            console.log('this state:', this.state.students)
        }

        render () {
        return (
        <div>
        <h1>Add to List</h1>
        <AddStudent campuses={this.state.campuses} students={this.state.students} addStudent={this.addStudent}/>
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


