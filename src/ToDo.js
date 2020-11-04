import React from "react";
import './App.css';


function ToDo(props) {


    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.description}</p>


        </div>
    )

}
export default ToDo;
