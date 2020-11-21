import React, {useState} from 'react';
import './App.css';


function ToDo(props) {
    const [newTitle, setNewTitle] = useState('');

    const editButtonHandler = () => {
        props.editTodo(newTitle, props.todo.id);
        setNewTitle('');

    }



    return (
        <div>
            <h4>{props.todo.title}</h4>
            <p>{props.todo.description}</p>
            <button onClick={() => props.deleteTodo(props.todo.id)}>delete</button>
            <button disabled={props.index === 0} onClick={() => props.moveTodo(props.index, props.index -1)}>⇡</button>
            <button disabled={props.isLast} onClick={() => props.moveTodo(props.index, props.index +1)}>⇣</button>
            <label>title: </label>
            <input value={newTitle} type="text" onChange={(e) => setNewTitle(e.target.value)}/>
            <button onClick={editButtonHandler}>update</button>
            <br/>
        </div>
    );

}
export default ToDo;
