import React, {useState} from 'react';
import './App.css';


function TodoController() {
const [newTitle, setNewTitle] = useState('');
const [newDescription, setNewDescription] = useState('');

const addNewButtonHandler = () => {
    console.log(newTitle);
}


    return (
        <div>
            <label>title:</label>
            <input type="text" onChange={(event) => setNewTitle(event.target.value)}/>

            <label>description:</label>
            <input type="text"/>
            <button onClick={addNewButtonHandler}>add new todo</button>
            <hr/>

        </div>
    );

}
export default TodoController;
