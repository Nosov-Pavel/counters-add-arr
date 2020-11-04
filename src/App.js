import React, {useState} from "react";
import './App.css';
import ToDo from "./ToDo";



function App() {
    const initState = [
        {id:1, title:'Fist', description: 'learn HTML'},
        {id:2, title:'Second', description: 'learn CSS'},
        {id:3, title:'Third', description: 'learn JS'},
        {id:4, title:'Forth', description: 'learn REACT'},
    ]
    const [todos, setTodos] = useState(initState);

    const deleteTodo = (id) => {
        const newList = todos.filter(el => el.id !== id);
        setTodos(newList);
    }

    return (
        <div>
            {todos.map(el => <ToDo todo={el} deleteTodo={deleteTodo()}/>)}

        </div>
    )

}
export default App;
