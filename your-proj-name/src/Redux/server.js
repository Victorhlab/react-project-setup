import * as ActionTypes from './ActionTypes';

export const Server = (state = {
        isLoading: true,
        payload:[]
    }, action) => {
    switch(action.type) {

        case ActionTypes.SERVER_LOADING:
            return {...state, isLoading:true, payload:[]};

        case ActionTypes.SERVER_TEST:
            return {...state, isLoading:false, payload: action.payload}
        default:
            return state;
    }
}