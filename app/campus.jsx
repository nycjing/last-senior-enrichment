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
                    <tr >
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

const Campus = (props) => {
    const campus = props.campus;
    const students = props.students;
    console.log(students)
    const instructors = props.instructors;
    return (

        <div className="campus">
            <div>
                <h3>{campus.name} Campus</h3>
                {/*<img src={`../public/img/${campus.name}.jpg`} name={campus.name} height="300" width="300"/>*/}
            </div>
            <div>
            <h4>Students List</h4>
            {
                students && students.map(student => (
                    <li>{ student.name }</li>
                ))
            }
            </div>
             <div>
            <h4> Instructors List</h4>
                 {
                     instructors && instructors.map(instructor => (
                         <li>{ instructor.name }</li>
                     ))
                 }
        </div>
        </div>
    );
}

class Main extends React.Component {

    constructor () {
        super(),
        this.state = {
            students: [],
            campus:{},
            instructors:[]
        }
    }

    componentDidMount () {
        axios.get('/api/1')
            .then(res => res.data)
            .then((data) => {
                this.setState({
                    students:data[0],
                    campus:data[1],
                instructors:data[2]})
            })

    }

    render () {
        return (
            <div>
                {/*<h1>List</h1>*/}
                {/*<Students students={this.state.students} handleRemove={this.handleRemove} />*/}
                <Campus campus={this.state.campus} students={this.state.students} instructors={this.state.instructors}/>
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
