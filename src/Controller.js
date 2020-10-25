import React from "react";
import './App.css';

function Controller(props) {



    return (
        <div>
            <button onClick={props.addCounter}>add</button>
            <hr/>

        </div>

    );
}

export default Controller;
