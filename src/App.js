import React, {useState} from "react";
import './App.css';


function App() {
    const [list, setList] = useState([
        {id: 1, counter: 12},
        {id: 2, counter: 5},
        {id: 3, counter: 36},
    ])

    const [editMode, setEditMode] = useState(false);

    const addCounter = () => {
        const newList = [...list, {id:Math.random(), counter: 0}];
        setList(newList);
    }
    // const moveCounterUp = (index) => {
    //     const newList = [...list];
    //
    //     const currentEl = newList[index];
    //     newList[index] = newList[index - 1];
    //     newList[index-1] = currentEl;
    //
    //     setList(newList)
    //
    //
    // }
    // const moveCounterDown = (index) => {
    //     const newList = [...list];
    //
    //     const currentEl = newList[index];
    //     newList[index] = newList[index + 1];
    //     newList[index + 1] = currentEl;
    //
    //     setList(newList)
    //
    //
    // }
    const moveCounter = (currentIndex, nextIndex) => {

        const newList = [...list];
        const currentEl = newList[currentIndex];
        newList[currentIndex] = newList[nextIndex];

        newList[nextIndex] = currentEl;


        setList(newList)
    }
    const counterChange = (id, value) => {
        const newList = list.map((el) => {
            if (el.id === id) return {...el, counter: el.counter + value}

            return el
        })
        setList(newList)

    }

    return (
        <div>
            <button onClick={addCounter}>add</button>
            <hr/>
            {list.map((el, i) => {
                return(
                    <div>
                        <button onClick={() => counterChange(el.id, 1)}>+</button>
                        <button onClick={() => counterChange(el.id, - 1)}>-</button>
                        {el.counter}
                        {i !== 0 && <button onClick={() => moveCounter (i, i -1)}>⇡</button>}
                        {i !== list.length -1 && <button onClick={() => moveCounter(i, i + 1)}>⇣</button>}
                    </div>

            )
            })}


        </div>

    );

}
export default App;
