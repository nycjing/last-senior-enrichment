import React from 'react';
import {connect} from 'react-redux'

/* -----------------    COMPONENT     ------------------ */



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


const mapStateToProps = (state) => {
    return {
        students: state.students,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleRemove: function (studentId) {
        }
    }
}

const ConnectedStudents = connect(mapStateToProps, mapDispatchToProps)(Students)
export default ConnectedStudents

