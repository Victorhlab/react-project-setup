import React from 'react';
import {Loading} from './LoadingComponent';

function DisplayXmlComponent(props) {

    if(props.isLoading) {
        return(
            <div className="container">
                <div className="row">
                    <Loading/>
                </div>
            </div>
        );
    }
    else {
        console.log("is done loading : props = ");
        console.log(props.content);
        return(
            <div className="container">
                <div className="row">
                    <p>{props.content}</p>
                </div>
            </div>
        )
    } 
}

export default DisplayXmlComponent;