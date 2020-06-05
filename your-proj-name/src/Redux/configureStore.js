import {createStore, combineReducers } from 'redux';
 
/* For middleware */
import {applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const initialStateForTest = null;
export const Test = (state=initialStateForTest, action) => {
    switch(action.type) {

     default:
         return state;
    }
}

export const Test2 = (state=initialStateForTest, action) => {
    switch(action.type) {

     default:
         return state;
    }
}

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           test: Test,
           test2: Test2,
        }),
        /* pass enhancers to our store */
        applyMiddleware(thunk, logger)
    );
    return store;
}