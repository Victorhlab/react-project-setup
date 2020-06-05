import React, {Component}  from 'react';

function FetchComponent(props) {

    fetch("xml", {
        mode: 'no-cors',
        method: 'GET',
        headers: new Headers({
            'Accept': 'application/xml',
            'content-type': 'application/x-www-form-urlencoded',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT',
            'Access-Control-Allow-Headers': 'Content-Type',
            })
        })
        .then(response => {
            response.text().then(text => {
                console.log(text)
            })
        })

    return(
        <></>
    );
}

export default FetchComponent;