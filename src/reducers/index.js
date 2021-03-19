export const START_SMURF_FETCH = "START_SMURF_FETCH"
export const SUCCESSFUL_SMURF_FETCH = "SUCCESSFUL_SMURF_FETCH"
export const FAILED_SMURF_FETCH = "FAILED_SMURF_FETCH"
export const ADD_SMURF = "ADD_SMURF"
export const ADD_ERROR = "ADD_ERROR"



export const initialState = {
    smurfs: [],
    isLoading: false,
    errors: ""
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_SMURF_FETCH:
            return {
                ...state,
                isLoading: true
            };
        case SUCCESSFUL_SMURF_FETCH:
            return {
                ...state,
                isLoading: false,
                smurfs: action.payload,
                errors: ""
            };
        case FAILED_SMURF_FETCH:
            return {
                ...state,
                isLoading: false,
                errors: action.payload
            };
        case ADD_SMURF:
            return {
                ...state,
                smurfs: [...state.smurfs, action.payload]
            };
        case ADD_ERROR:
            return {
                ...state,
                errors: action.payload
            };
        default:
            return state;
    }
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.