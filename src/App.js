import React, {useState} from "react";
import './App.css';


function App() {
    const initState = [
        {id:1, title:'Fist', description: 'learn HTML'},
        {id:2, title:'Second', description: 'learn CSS'},
        {id:3, title:'Third', description: 'learn JS'},
        {id:4, title:'Forth', description: 'learn REACT'},
    ]
    const [todos, setTodos] = useState(initState);

    return (
        <div>


        </div>
    )

}
export default App;
