import axios from 'axios';

const initialState = {
    campus:[]
}
/* -----------------    ACTIONS     ------------------ */

const INITIALIZE = 'INITIALIZE';

/* ------------   ACTION CREATORS     ------------------ */

const init  = campusData => ({ type: INITIALIZE, campusData });

/* ------------       REDUCER     ------------------ */

export default function students (state = initialState, action) {
    switch(action.type) {
        case INITIALIZE:
            return action.campusData;

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
    axios.get(`/api/${id}`)
        .then(res => dispatch(init(res.data)))
        .catch(err => console.error(err));
};
