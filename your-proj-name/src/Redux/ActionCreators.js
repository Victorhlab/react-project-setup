import React from 'react';
import * as ActionTypes from './ActionTypes';

export const fetchTest = () => (dispatch) => {
    dispatch(serverLoading());

    /* Simulate server */
    setTimeout(()=>{
        
        var request = "http://localhost:8820/astronautUi/version/1/Periodic/CurrentVacuumLevel?requesttype=value";
        var xhr = new XMLHttpRequest();
        var json_obj, status = false;
        xhr.open("GET", request, true);
        xhr.onload = function (e) {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    var json_obj = (xhr.responseText);
                    status = true;
                    dispatch(runTest(json_obj));
                } 
                else {
                    console.error(xhr.statusText);
                }
            }
        }.bind(this);
        xhr.onerror = function (e) {
        console.error(xhr.statusText);
        };
        xhr.send(null);
    
        if(json_obj!=null)
            return (json_obj);
        else    
            return (null) 
 
            
    }, 2000);

}


export const runTest = (data) => ({
    type: ActionTypes.SERVER_TEST,
    payload: data
});

export const serverLoading = () => ({
    type: ActionTypes.SERVER_LOADING
});