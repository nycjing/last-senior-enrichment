import React from 'react';
import  { fetchOneCampus } from '../reducers/campus';
import { connect } from 'react-redux';

const Campus = (props) => {

    const campusId=props.id

    const campus = props.campus;
    const students = props.students;
    console.log(students)
    const instructors = props.instructors;

       // componentDidMount () {
       //  this.props.fetchOneCampus(campusId);
       // }
    return (

        <div className="campus">
            <div>
                <h3>{campus.name} Campus</h3>
                <img src={`/img/${campus.name}.jpg`} name={campus.name} height="300" width="300"/>*/}
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

const mapState = ({ campuses, students }, ownProps) => {
const campusId = Number(ownProps.match.params.id);
    return{
        campus: _.find(campuses,campus => campus.id === campusId)
    }
}
const mapDispatchToProps = {fetchOneCampus}

export default connect(null,mapDispatchToProps)(Campus)



