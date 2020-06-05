import React from 'react';
import FetchComponent from './FetchComponent';
import DisplayXmlComponent from './DisplayXmlComponent';

function Home(props) {
    
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">
                    <h1>Hallo World!</h1>
                    <DisplayXmlComponent 
                        isLoading = {props.server.isLoading}
                        content   = {props.server.payload}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home