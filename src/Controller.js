import React, {useState} from "react";
import './App.css';


function Controller(props) {
    const [value, setValue] = useState('');

    const inputHendler = (event) => {
        setValue( +event.target.value );
    }
    const addButtonHandler = () => {
        props.addCounter(value);
        setValue('');

    }


    return (
        <div>
            <button onClick={props.counterReset}>reset to init</button>
            <button onClick={addButtonHandler}>Add new</button>
            <input type="text"onChange={inputHendler} value={value}/>
            <hr/>
        </div>
    );

}
export default Controller;
