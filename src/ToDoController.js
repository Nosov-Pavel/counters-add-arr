import React, {useState} from 'react';
import './App.css';


function TodoController(props) {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [isAddModeOn, setIsAddModeOn] = useState(false);

    const addNewButtonHandler = () => {
        props.addTodo(newTitle, newDescription);
        setNewTitle('');
        setNewDescription('');
    }


    return (
        <div>
            <button onClick={() => setIsAddModeOn(!isAddModeOn)}>add new todo</button>
            {isAddModeOn &&
                <>
                    <label>title:</label>
                    <input type="text"
                           value={newTitle}
                           onChange={(event) => setNewTitle(event.target.value)}/>

                    <label>description:</label>
                    <input type="text"
                           value={newDescription}
                           onChange={(event) => setNewDescription(event.target.value)}/>

                    <button onClick={addNewButtonHandler}>save</button>
                </>
            }

            <hr/>

        </div>
    );

}

export default TodoController;
