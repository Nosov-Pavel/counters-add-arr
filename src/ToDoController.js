import React, {useState} from 'react';
import './App.css';


function TodoController(props) {
const [newTitle, setNewTitle] = useState('');
const [newDescription, setNewDescription] = useState('');

const addNewButtonHandler = () => {
    props.addTodo(newTitle, newDescription);
    setNewTitle('');
    setNewDescription('');
}



    return (
        <div>
            <button>add new todo</button>
            <label>title:</label>
            <input type="text"
                   value={newTitle}
                   onChange={(event) => setNewTitle(event.target.value)}/>

            <label>description:</label>
            <input type="text"
                   value={newDescription}
                   onChange={(event) => setNewDescription(event.target.value)}/>

            <button onClick={addNewButtonHandler}>add new todo</button>
            <hr/>

        </div>
    );

}
export default TodoController;
