import React, {useState} from 'react';
import './App.css';
import ToDo from "./ToDo";
import ToDoController from "./ToDoController";


function App() {
    const initState = [
        {id: 1, title: 'Fist', description: 'learn HTML'},
        {id: 3, title: 'Third', description: 'learn JS'},
        {id: 2, title: 'Second', description: 'learn CSS'},
        {id: 4, title: 'Forth', description: 'learn REACT'},
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

        setTodos(newList)
    }

    const addTodo = (newTitle, newDescription) => {
        const newTodo = {
            id: Math.random(),
            title: newTitle,
            description: newDescription
        };
        const newList = [...todos, newTodo];
        setTodos(newList);

        const aditTodo = (newTitle, id) => {
            const newList = todos.map(el => {
                if (el.id === id) return{...el, title: newTitle}
                return el
            })
            setTodos(newList);

        }
    }

    return (
        <div>
            <ToDoController addTodo={addTodo}/>

            {todos.map((el, index) => <ToDo
                key={el.id}
                isLast={index === todos.length - 1}
                todo={el}
                index={index}
                editTodo={aditTodo}
                deleteTodo={deleteTodo}
                moveTodo={moveTodo}/>
            )}

        </div>
    );

}

export default App;
