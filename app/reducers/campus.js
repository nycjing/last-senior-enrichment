import axios from 'axios';

const initialState = {
    campuses:[],
    students:[]
}
/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE';

/* ------------   ACTION CREATORS     ------------------ */

const init  = campuses => ({ type: INITIALIZE, campuses });

/* ------------       REDUCER     ------------------ */

export default function campus (state = initialState, action) {
    switch(action.type) {
        case INITIALIZE:
            return action.campuses;

        default: return state;
    }
};

/* ------------   THUNK CREATORS     ------------------ */
//get one specific campus data
export const fetchOneCampus = (id) => dispatch => {
    axios.get(`/api/${id}`)
        .then(res => res.data)
        .then((data)=>{
             return data
        })
        .catch(err => console.error(err));
};

export const fetchCampus = () => dispatch => {
    axios.get(`/api/add`)
        .then(res => dispatch(init(res.data)))
        .catch(err => console.error(err));
};
