import axios from 'axios';

const initialState = {
    students:[],
    campus:[]
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
        .then(res => res.data)
        .then(data => dispatch(init(data)));
};

// delete student
export const removeStudent = (id) => dispatch => {
     dispatch(remove(id));
     axios.delete(`/api/${id}/delete`)
        .catch(err => console.error(err));
};

export const addStudent = (student) => dispatch => {
    axios.post('/api/', student)
        .then(res => dispatch(create(res.data)))
        .catch(err => console.error(err));
};