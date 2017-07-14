import axios from 'axios';

const initialState = {
    students:[]
}
/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE';
const CREATE     = 'CREATE';
export const REMOVE = 'REMOVE';

/* ------------   ACTION CREATORS     ------------------ */

const init  = students => ({ type: INITIALIZE, students });
const create = student  => ({ type: CREATE, student });
const remove = id    => ({ type: REMOVE, id });

/* ------------       REDUCER     ------------------ */

export default function students (state = initialState, action) {
    switch(action.type) {
        case INITIALIZE:
            return action.students;

        case CREATE:
            return [action.student, ...students];

        case REMOVE:
            return students.filter(student => student.id !== action.id);

        default: return state;
    }
};

/* ------------   THUNK CREATORS     ------------------ */
//get all students data
export const fetchStudents = () => dispatch => {
    axios.get(`/api/`)
        .then(res => dispatch(init(res.data)));
};

// delete student
export const removeStudent = id => dispatch => {

    axios.delete(`/api/${studentId}/delete`)
        .then( ()=> {
            dispatch(remove(id));
        })
        .catch(err => console.error(err));
};

export const addStudent = student => dispatch => {
    axios.post('/api/', student)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(err));
};