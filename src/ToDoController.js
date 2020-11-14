import React, {useState} from 'react';
import './App.css';


function ToDoController() {
const [newTitle, setNewTitle] = useState('');

const addNewButtonHendler = () => {
    console.log(newTitle);
}


    return (
        <div>
            <label>title:</label>
            <input type="text" onClick={(event) => setNewTitle(e.target.value)}/>
            <label>description:</label>
            <input type="text"/>
            <button onClick={addNewButtonHendler}>add new todo</button>
            <hr/>

        </div>
    );

}
export default ToDoController;
