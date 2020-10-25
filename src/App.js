import React, {useState} from "react";
import './App.css';
import List from "./List";



function App() {
    const [list, setList] = useState([
        {id: 1, counter: 12},
        {id: 2, counter: 5},
        {id: 3, counter: 36},
    ])


    return (
        <div>
            <List list={list}/>

        </div>

    );

}
export default App;
