import React, {useState} from "react";
import './App.css';
import List from "./List";
import Controller from "./Controller";



function App() {
    const [list, setList] = useState([
        {id: 1, counter: 12},
        {id: 2, counter: 5},
        {id: 3, counter: 36},
    ])

    const addCounter = () => {
        const newList = [...list, {id:Math.random(), counter: 0}];
        setList(newList);
    }


    return (
        <div>
            <Controller addCounter={addCounter}/>
            <List list={list}/>

        </div>

    );

}
export default App;
