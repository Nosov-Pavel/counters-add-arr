import React from 'react';
import './App.css';


function ToDo(props) {


    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.description}</p>
            <button onClick={() => props.deleteTodo(props.todo.id)}>delete</button>
            <button>⇡</button>
            <button>⇣</button>
            <br/>


        </div>
    );

}
export default ToDo;
