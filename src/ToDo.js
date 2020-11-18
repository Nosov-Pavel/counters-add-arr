import React, {useState} from 'react';
import './App.css';


function ToDo(props) {
    const [newTitle, setNewTitle] = useState('');



    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.description}</p>
            <button onClick={() => props.deleteTodo(props.todo.id)}>delete</button>
            <button disabled={props.index === 0} onClick={() => props.moveTodo(props.index, props.index -1)}>⇡</button>
            <button disabled={props.isLast} onClick={() => props.moveTodo(props.index, props.index +1)}>⇣</button>
            <label>title: </label>
            <input type="text"/>
            <button>update</button>
            <br/>
        </div>
    );

}
export default ToDo;
