import { SET_JOB,ADD_JOB,DELETE_JOB } from "./constants";
// 1. Init State
export const initState = {
    // for input tag
    job:'',
    // for li tag
    jobs:[]
}

// 3. Reducer
const reducer = (state,action) =>{
    switch (action.type) {
        case SET_JOB:
            return  {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs:[
                    ...state.jobs,
                    action.payload
                ]
            }
        case DELETE_JOB:
            const newJobs = [...state.jobs].filter((job,index) =>(index!==action.payload))
            return {
                ...state,
                jobs: newJobs
            }
        default:
            throw new Error('Invalid action: ' + action);
    }
}

export default reducer