import React, {useState} from "react";
import './App.css';
import CounterList from "./CounterList";


function App() {
    const [counters, setCounters] = useState([0, 0, 0]);

    const addCounter = () => {
        const newCounters = [...counters];
        newCounters.push(0);
        setCounters(newCounters);

    }
    const counterPlus = (index) => {
        const newCounters = counters.map( (el, i) => {
            if (i === index ) return el + 1
            return el
        })
        setCounters(newCounters)
    }
    const counterMinus = (index) => {
        const newCounters = counters.map( (el, i) =>{
            if (i === index) return el - 1
            return el
        })
    }

    return (
        <div>
            <button onClick={addCounter}>Add new</button>
            <hr/>
            <CounterList counterMinus={counterMinus} counterPlus={counterPlus} list={counters}/>
        </div>
    );

}
export default App;
