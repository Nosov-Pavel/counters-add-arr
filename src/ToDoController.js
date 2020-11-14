import React, {useState} from 'react';
import './App.css';


function ToDoController() {
const [newTitle, setNewTitle] = useState('');



    return (
        <div>
            <label>title:</label>
            <input type="text"/>
            <label>description:</label>
            <input type="text"/>
            <button>add new todo</button>
            <hr/>

        </div>
    );

}
export default ToDoController;
