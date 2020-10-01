import React, {useState} from "react";
import './App.css';
import CounterList from "./CounterList";
import Controller from "./Controller";


function App() {
    const initCounters = [0, 0, 0];
    const [counters, setCounters] = useState(initCounters);

    const addCounter = () => {
        const newCounters = [...counters];
        newCounters.push(0);
        setCounters(newCounters);

    }

    const counterReset = () => {
        setCounters(initCounters)
    }

    const counterChange = (index, val) => {
        const newCounters = counters.map( (el, i) => {
            if (i === index ) return el + val
            return el
        })
        setCounters(newCounters)
    }

    const deleteCounter = (index) => {
        const newCounter = counters.filter((el,i) => i !== index)

        setCounters(newCounter);
    }



    return (
        <div>
            <Controller addCounter={addCounter} counterReset={counterReset}/>
            <CounterList deleteCounter={deleteCounter} counterChange={counterChange} list={counters}/>
        </div>
    );

}
export default App;
