import React, {useState} from "react";
import './App.css';


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
    const swapCounter = (index) => {
        const newList = [...list];

        const currentEl = newList[index];
        newList[index] = newList[index - 1];
        newList[index-1] = currentEl;

        setList(newList)


    }


    return (
        <div>
            <button onClick={addCounter}>add</button>
            <hr/>
            {list.map((el, i) => {
                return(
                    <div>
                        {el.counter}
                        <button onClick={() => swapCounter (i)}>⇡</button>
                        <button>⇣</button>
                    </div>

            )
            })}


        </div>

    );

}
export default App;
