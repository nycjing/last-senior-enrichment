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

const Students = (props) => {

    const students = props.students;
    console.log(students)
    return (
        <table className='table'>
            <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Campus</th>
                <th>Delete</th>
            </tr>
            </thead>
            <tbody>
            {
                students && students.map(student => (

                    <tr key={student.id}>
                        <td></td>
                        <td>{ student.name }</td>
                        <td>
                            <span>{ student.campus.name }</span>
                        </td>
                        <td>
                            <input onClick={()=> props.handleRemove(student.id)} type='button' value='x'/>
                        </td>
                    </tr>
                ))
            }
            </tbody>
        </table>
    );
}


class Main extends React.Component {

    constructor () {
        super()
        this.state = {
            students: [],
            campus:{},
            instructors:[]
        }

        this.handleRemove = this.handleRemove.bind(this)
    }

    componentDidMount () {
        axios.get('/api/')
            .then(res => res.data)
            .then(students => {
                this.setState({students})
            })

    }

    handleRemove (studentId) {
        axios.delete(`/api/${studentId}/delete`)
            .then( ()=> {
                return this.setState({
                    students: this.state.students.filter(student => student.id !== studentId)
                })
            })
            .catch(err => console.error(err));
    }

    render () {
        return (
            <div>
                <h1>Student List</h1>
                <Students students={this.state.students} handleRemove={this.handleRemove} />
            </div>
        )
    }
}


const history = createBrowserHistory();

ReactDOM.render(
    <Main />,
    document.getElementById('main')
)



//{/*<select key={student.id} onClick ={()=> props.handleRemove(student.id)}>*/}
//    {/*<button class="btn btn-xs btn-danger btn-default remove btn-circle">x*/}
//    {/*</button>*/}
//{/*</select>*/}
//{/*<Students students={this.state.students} />*/}
