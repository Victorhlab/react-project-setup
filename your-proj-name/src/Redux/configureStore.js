import {createStore, combineReducers } from 'redux';
import {Server} from './server';
/* For middleware */
import {applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
           server: Server
        }),
        /* pass enhancers to our store */
        applyMiddleware(thunk, logger)
    );
    return store;
}