import React, {useState} from 'react';
import './App.css';
import ToDo from "./ToDo";



function App() {
    const initState = [
        {id:1, title:'Fist', description: 'learn HTML'},
        {id:3, title:'Third', description: 'learn JS'},
        {id:2, title:'Second', description: 'learn CSS'},
        {id:4, title:'Forth', description: 'learn REACT'},
    ]
    const [todos, setTodos] = useState(initState);

    const deleteTodo = (id) => {
        const newList = todos.filter(el => el.id !== id);
        setTodos(newList);
    }

    const moveTodo = (currentIndex, nextIndex) => {
        const newList = [...todos];

        const currentElem = newList[currentIndex];
        newList[currentIndex] = newList[nextIndex];
        newList[nextIndex] = currentElem;

        setTodos(nextIndex)
    }

    return (
        <div>
            {todos.map((el, index) => <ToDo isLast={index === todos.length -1}
                todo={el}
                index={index}
                deleteTodo={deleteTodo}
                moveTodo={moveTodo}/>
                )}

        </div>
    )

}
export default App;
